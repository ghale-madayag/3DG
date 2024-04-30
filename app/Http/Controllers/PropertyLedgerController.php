<?php

namespace App\Http\Controllers;

use App\Models\PropertyLedger;
use App\Models\PropertyLedgerTransaction;
use App\Models\PropertyReservation;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class PropertyLedgerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {   
        $user = auth()->user()->id;
        $property = PropertyReservation::with(['lot','lot.lot_images','lot.block','lot.block.phase','ledger',
            'ledger.ledger_trans' => function($query) {
                $query->selectRaw('*, DATE_FORMAT(due_date, "%D of the Month") as formatted_due_date');
            }])
            ->selectRaw('*, 
                DATE_FORMAT(DATE_ADD(created_at, INTERVAL 10 DAY), "%M %e, %Y") as due_date_plus_10_days,
                CONCAT("Due in ", DATEDIFF(DATE_ADD(created_at, INTERVAL 10 DAY), CURDATE()), " days") as due_in'
            )
            ->where('client_id',$user)
            ->paginate(9);

        //dd($property);
        return Inertia::render('Property/MyProperty',[
            'property' => $property,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(PropertyReservation $property)
    {
        $properties = $property->with(['lot.block.phase.project.land',
        'ledger.ledger_trans_list' => function($query){
            $query->orderBy('terms','asc');
        },
        'ledger.ledger_trans' => function($query) {
            $query->selectRaw('*, DATE_FORMAT(due_date, "%D of the Month") as formatted_due_date');
        }])
        ->find($property->invoice_number); // Use with() during query

        $next_due = $properties->ledger->ledger_trans_list
            ->filter(function ($transaction) {
                return $transaction->payment_status === 'Unpaid';
            })
            ->sortBy('terms')
            ->first();

        //dd($unpaidTransaction);

        return Inertia::render('Ledger/Index',[
            'property' => $properties,
            'next_due' => $next_due,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PropertyLedger $propertyLedger)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $ledger)
    {  

        $request->validate([
            'amount' => 'required|numeric|min:1',
        ]);
        
        $remainingBalance = 0;
        $monthsPaid = 0;
        $paymentAmount = $request->amount;
        $transactions = PropertyLedgerTransaction::where('property_ledger_id',$ledger)
            ->where('payment_status','Unpaid')
            ->orderBy('terms','asc')->get();

        if ($transactions->isEmpty()) {
            // Handle the case where no transactions are found
            // For example, you can throw an error or redirect with a message
            return redirect()->to('/my-ledger/'.$request->invoice_number)->withErrors(['error' => 'No unpaid transactions found']);
        }

        $check_monthly = $transactions->first();
        $amortization = $check_monthly->monthly_payment;
        $totalPayment = $request->amount + $check_monthly->paid_amount;
        
        if ($totalPayment >= $amortization) {
            $remainingBalance = 0;
            $monthsPaid = 0;
            $paymentAmount = $request->amount;
    
            foreach ($transactions as $transaction) {
                $remainingBalance = $transaction->paid_amount;
                $monthlyPayment = $transaction->monthly_payment - $remainingBalance;
    
                $transaction->payment_status = 'Paid';
                $transaction->paid_amount = $paymentAmount;
                $transaction->save();
    
                if ($paymentAmount < $monthlyPayment) {
                    $transaction->payment_status = 'Unpaid';
                    $transaction->paid_amount = $paymentAmount;
                    $transaction->save();
                    break;
                }
                
                $paymentAmount -= $monthlyPayment;
                $monthsPaid++;
            }
    
            $message = ($monthsPaid > 1) ? "Client successfully paid $monthsPaid months amortization" : "Client successfully paid $monthsPaid month amortization";
            return redirect()->to('/my-ledger/'.$request->invoice_number)->with('message', $message);
        } else {
            return redirect()->to('/my-ledger/'.$request->invoice_number)->withErrors(['error' => 'Invalid payment amount']);
            //return redirect()->to('/my-ledger/'.$request->invoice_number)->with('errors', 'error');
        }
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PropertyLedger $propertyLedger)
    {
        //
    }

    public function commission(){

        $currenUser = Auth::user();

        $property = PropertyReservation::with([
            'lot' => function ($query) {
                $query->select('id','lot_number','lot_name','block_id');
            }, 
            'client' => function ($query) {
                $query->select('id', 'fname', 'lname', 'phone', 'email');
            },
            'lot.block' => function ($query){
                $query->select('id','block_number','phase_id');
            },
            'lot.block.phase' => function ($query){
                $query->select('id','phase_name');
            }
        ])
        ->where('agent_id', $currenUser->id)
        ->filter(request(['search','status']))->get();

        // Get the current date
        $today = Carbon::today();

       // Determine the start and end dates for the two periods
        $startFirstPeriod = $today->copy()->startOfMonth()->addDays(20);
        $endFirstPeriod = $today->copy()->startOfMonth()->addMonths(1)->subDays(1);

        $startSecondPeriod = $today->copy()->startOfMonth();
        $endSecondPeriod = $today->copy()->startOfMonth()->addDays(19);
        //dd($endSecondPeriod);

        $commissionTotal = 0;
        $commissionFirstPeriod = 0;
        $commissionSecondPeriod = 0;
        $commissionEntireMonth = 0;
        $commissionPerMonth = [];

        // Retrieve all property reservations associated with the current agent
        $propertyReservations = PropertyReservation::with(['ledger.ledger_trans_list' => function($query){
            $query->orderBy('terms','asc');
        }])
        ->where('agent_id', $currenUser->id)
        ->where('status','Installment')
        ->orWhere('status','Fullpayment')
        ->get();

        foreach ($propertyReservations as $reservation) {

            if($reservation->ledger->ledger_trans_list->isEmpty()){
                if ($reservation->ledger->updated_at >= $startFirstPeriod && $reservation->ledger->updated_at <= $endFirstPeriod) {
                    // Calculate commission for the first period
                    $commissionPercent = $reservation->agent_com / 100;
                    $commissionFirstPeriod += $reservation->ledger->total_amount * $commissionPercent;
                }

                if ($reservation->ledger->updated_at >= $startSecondPeriod && $reservation->ledger->updated_at <= $endSecondPeriod) {
                    // Calculate commission for the first period
                    $commissionPercent = $reservation->agent_com / 100;
                    $commissionSecondPeriod += $reservation->ledger->total_amount * $commissionPercent;
                }

                if ($reservation->ledger->updated_at->isSameMonth($today)) {
                    // Calculate and add the commission to the total for the entire month
                    $commissionPercent = $reservation->agent_com / 100;
                    $commissionEntireMonth += $reservation->ledger->total_amount * $commissionPercent;
                }

               

                // Extract the month and year from the transaction's updated_at timestamp
                $monthYear = Carbon::parse($reservation->ledger->updated_at)->format('F');

                // Calculate the commission earned for this transaction
                $commissionPercent = $reservation->agent_com / 100;
                $commission = $reservation->ledger->total_amount * $commissionPercent;
    
                // Add the commission to the total earnings for this month
                if (!isset($commissionPerMonth[$monthYear])) {
                    $commissionPerMonth[$monthYear] = 0;
                }

                $commissionPerMonth[$monthYear] += $commission;
                $commissionTotal +=  $reservation->ledger->total_amount * $commissionPercent;

            }else{
                foreach ($reservation->ledger->ledger_trans_list as $transaction) {
                
                    if ($transaction->payment_status === 'Paid' &&
                        $transaction->updated_at >= $startFirstPeriod &&
                        $transaction->updated_at <= $endFirstPeriod) {
                        // Calculate and add the commission to the total for the first period
                        $commissionPercent = $reservation->agent_com / 100;
                        $commissionFirstPeriod += $transaction->monthly_payment * $commissionPercent;
                    }
                }
    
                foreach ($reservation->ledger->ledger_trans_list as $transaction) {
                    if ($transaction->payment_status === 'Paid' &&
                        $transaction->updated_at >= $startSecondPeriod &&
                        $transaction->updated_at <= $endSecondPeriod) {
                        // Calculate and add the commission to the total for the second period
                        $commissionPercent = $reservation->agent_com / 100;
                        $commissionSecondPeriod += $transaction->monthly_payment * $commissionPercent;
                    }
                }
        
                // Sum up commission from associated ledger transactions for the entire month
                foreach ($reservation->ledger->ledger_trans_list as $transaction) {
                    if ($transaction->payment_status === 'Paid' &&
                        $transaction->updated_at->isSameMonth($today)) {
                        // Calculate and add the commission to the total for the entire month
                        $commissionPercent = $reservation->agent_com / 100;
                        $commissionEntireMonth += $transaction->monthly_payment * $commissionPercent;
                    }
                }
    
                 // Sum up commission from associated ledger transactions for the entire transaction
                 foreach ($reservation->ledger->ledger_trans_list as $transaction) {
                    if ($transaction->payment_status === 'Paid') {
                        // Calculate and add the commission to the total for the entire month
                        $commissionPercent = $reservation->agent_com / 100;
                        $commissionTotal += $transaction->monthly_payment * $commissionPercent;
                    }
                }
    
               // Loop through each ledger transaction associated with the reservation
                foreach ($reservation->ledger->ledger_trans_list as $transaction) {
    
                    if ($transaction->payment_status === 'Paid') {
                        // Extract the month and year from the transaction's updated_at timestamp
                        $monthYear = Carbon::parse($transaction->updated_at)->format('F');
    
                        // Calculate the commission earned for this transaction
                        $commissionPercent = $reservation->agent_com / 100;
                        $commission = $transaction->monthly_payment * $commissionPercent;
            
                        // Add the commission to the total earnings for this month
                        if (!isset($commissionPerMonth[$monthYear])) {
                            $commissionPerMonth[$monthYear] = 0;
                        }
    
                        $commissionPerMonth[$monthYear] += $commission;
                    }
                }
            }

        }

        // Format the commission earnings per month with two decimal places
        $formattedCommissionPerMonth = array_map(function ($commission) {
            return number_format($commission, 2, '.', '');
        }, $commissionPerMonth);
        
        // Define an array of months
        $monthsOfYear = [
            'January', 'February', 'March', 'April', 'May', 'June', 
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        // Initialize an array to store the formatted commission per month
        $commissionPerMonthArray = [];

        // Loop through the months
        foreach ($monthsOfYear as $month) {
            $formattedCommission = isset($formattedCommissionPerMonth[$month]) ? $formattedCommissionPerMonth[$month] : '0.00';
            $commissionPerMonthArray[] = $formattedCommission;
        }

       // dd($commissionPerMonthArray);

        return Inertia::render('User/Commission',[
            'property' => $property,
            'first_period' => $commissionFirstPeriod,
            'second_period' => $commissionSecondPeriod,
            'entire_month' => $commissionEntireMonth,
            'total' => $commissionTotal,
            'graphData' => $commissionPerMonthArray,
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\LandDevelopment;
use App\Models\Lot;
use App\Models\PropertyLedger;
use App\Models\PropertyLedgerTransaction;
use App\Models\PropertyReservation;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Crypt;
use Inertia\Inertia;
use OwenIt\Auditing\Models\Audit;

class VelzonRoutesController extends Controller
{
    //

    public function dashboard()
    {

        $currentUser = Auth::user();
        $land = LandDevelopment::count();
        $user = User::where('id', '!=', $currentUser->id)->count();

        $currentMonthStart = Carbon::now()->startOfMonth();
        $currentMonthEnd = Carbon::now()->endOfMonth();

        //paid invoices

        $paidInvoices  = PropertyLedgerTransaction::where('payment_status', 'Paid')
            ->whereBetween('updated_at', [$currentMonthStart, $currentMonthEnd])
            ->get();
        
        $paidInvoicesBal  = PropertyLedgerTransaction::where('payment_status', 'Unpaid')
            ->where('paid_amount','>', 0)
            ->whereBetween('updated_at', [$currentMonthStart, $currentMonthEnd])
            ->get();
        
        $resInvoice = PropertyReservation::whereNotIn('status', ['Pending', 'Overdue'])
            ->whereBetween('created_at', [$currentMonthStart, $currentMonthEnd])
            ->get();

        $fullInvoices = PropertyReservation::with('ledger')
            ->where('status', 'Fullpayment')
            ->whereBetween('created_at', [$currentMonthStart, $currentMonthEnd])
            ->get();

        $fulltotalAmount = 0;

        foreach ($fullInvoices as $invoice) {
            $fulltotalAmount += $invoice->ledger->total_amount;
        }


        $paidInvoiceCount = $paidInvoices->count();
        $paidInvoiceTotalAmount = ($paidInvoices->sum('monthly_payment') ?? 0) 
            + ($paidInvoicesBal->sum('paid_amount') ?? 0) 
            + ($resInvoice->sum('reservation_fee') ?? 0)
            + ($fulltotalAmount ?? 0);

        $paidInvoiceData = [
            'count' => $paidInvoiceCount,
            'total_amount' => $paidInvoiceTotalAmount,
        ];


        $unpaidInvoices  = PropertyLedgerTransaction::where('payment_status', 'Unpaid')
        ->whereBetween('due_date', [$currentMonthStart, $currentMonthEnd])
        ->get();
    
        $unpaidInvoiceCount = $unpaidInvoices->count();
        $unpaidInvoiceTotalAmount = $unpaidInvoices->sum('monthly_payment');

        $unpaidInvoiceData = [
            'count' => $unpaidInvoiceCount,
            'total_amount' => $unpaidInvoiceTotalAmount,
        ];

        $sold = PropertyLedger::count();
        $available = Lot::where('status','Available')->count();

        $roles = $currentUser->getRoleNames()->toArray();
        $id = $currentUser->id;

        //get the revenue

        $commissionPerMonth = [];
        
        $propertyReservations = PropertyReservation::with(['ledger.ledger_trans_list' => function($query){
            $query->orderBy('terms','asc');
        }])
        ->where(function ($query) {
            $query->where('status','Installment')
                  ->orWhere('status','Fullpayment');
        })
        ->get();

        foreach ($propertyReservations as $reservation) {
            if($reservation->ledger->ledger_trans_list->isEmpty()){
                // Extract the month and year from the transaction's updated_at timestamp
                $monthYear = Carbon::parse($reservation->ledger->updated_at)->format('F');

                // Calculate the commission earned for this transaction
                $commission = $reservation->ledger->total_amount;
    
                // Add the commission to the total earnings for this month
                if (!isset($commissionPerMonth[$monthYear])) {
                    $commissionPerMonth[$monthYear] = 0;
                }

                $commissionPerMonth[$monthYear] += $commission;

            }else{

    
               // Loop through each ledger transaction associated with the reservation
                foreach ($reservation->ledger->ledger_trans_list as $transaction) {
    
                    if ($transaction->payment_status === 'Paid') {
                        // Extract the month and year from the transaction's updated_at timestamp
                        $monthYear = Carbon::parse($transaction->updated_at)->format('F');
    
                        // Calculate the commission earned for this transaction
                        $commission = $transaction->monthly_payment;

            
                        // Add the commission to the total earnings for this month
                        if (!isset($commissionPerMonth[$monthYear])) {
                            $commissionPerMonth[$monthYear] = 0;
                        }
    
                        $commissionPerMonth[$monthYear] += $commission;
                    }else if($transaction->payment_status === 'Unpaid' && $transaction->paid_amount > 0){
                         // Extract the month and year from the transaction's updated_at timestamp
                         $monthYear = Carbon::parse($transaction->updated_at)->format('F');
    
                         // Calculate the commission earned for this transaction
                         $commission = $transaction->paid_amount;
             
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

        //get all audit
        //$audits = Audit::with('user')->latest()->get();

        $loginAudits = Audit::with('user')
        ->latest()
        ->get();

        //dd($loginAudits);

        if($roles[0] == 'administrator' || $roles[0] == 'superadmin'){
            return Inertia::render('dashboards/Index',[
                'land' => $land,
                'user' => $user,
                'paid' => $paidInvoiceData,
                'unpaid' => $unpaidInvoiceData,
                'sold' => $sold,
                'available' => $available,
                'graphData' => $commissionPerMonthArray,
                'audits' => $loginAudits,
            ]);
        }else if($roles[0] == 'agent'){

            $encryptedId = Crypt::encrypt($id);
            return Inertia::location('/commission/'.$encryptedId );
        }else{
            
            $encryptedId = Crypt::encrypt($id);
            return Inertia::location('/my-property/'.$encryptedId);
        }

      
    }

    public function pages_starter() {
        return Inertia::render('pages/starter');
    }

    public function pages_maintenance() {
        return Inertia::render('pages/maintenance');
    }

    public function pages_coming_soon() {
        return Inertia::render('pages/coming-soon');
    }

    public function auth_signin_basic() {
        return Inertia::render('auth-pages/signin/basic');
    }

    public function auth_signin_cover() {
        return Inertia::render('auth-pages/signin/cover');
    }

    public function auth_signup_basic() {
        return Inertia::render('auth-pages/signup/basic');
    }

    public function auth_signup_cover() {
        return Inertia::render('auth-pages/signup/cover');
    }

    public function auth_reset_pwd_basic() {
        return Inertia::render('auth-pages/reset/basic');
    }

    public function auth_reset_pwd_cover() {
        return Inertia::render('auth-pages/reset/cover');
    }

    public function auth_create_pwd_basic() {
        return Inertia::render('auth-pages/create/basic');
    }

    public function auth_create_pwd_cover() {
        return Inertia::render('auth-pages/create/cover');
    }

    public function auth_lockscreen_basic() {
        return Inertia::render('auth-pages/lockscreen/basic');
    }

    public function auth_lockscreen_cover() {
        return Inertia::render('auth-pages/lockscreen/cover');
    }

    public function auth_twostep_basic() {
        return Inertia::render('auth-pages/twostep/basic');
    }

    public function auth_twostep_cover() {
        return Inertia::render('auth-pages/twostep/cover');
    }

    public function auth_404() {
        return Inertia::render('auth-pages/errors/404');
    }

    public function auth_500() {
        return Inertia::render('auth-pages/errors/500');
    }

    public function auth_404_basic() {
        return Inertia::render('auth-pages/errors/404-basic');
    }

    public function auth_404_cover() {
        return Inertia::render('auth-pages/errors/404-cover');
    }

    public function auth_ofline() {
        return Inertia::render('auth-pages/errors/ofline');
    }

    public function auth_logout_basic() {
        return Inertia::render('auth-pages/logout/basic');
    }

    public function auth_logout_cover() {
        return Inertia::render('auth-pages/logout/cover');
    }

    public function auth_success_msg_basic() {
        return Inertia::render('auth-pages/success-msg/basic');
    }

    public function auth_success_msg_cover() {
        return Inertia::render('auth-pages/success-msg/cover');
    }

    public function property(){
        return Inertia::render('Property/Index');
    } 

}

<?php

namespace App\Http\Controllers;

use App\Mail\SendInvoice;
use App\Models\Block;
use App\Models\Lot;
use App\Models\PaymentsInvoice;
use App\Models\Phase;
use App\Models\Project;
use App\Models\PropertyLedger;
use App\Models\PropertyLedgerTransaction;
use App\Models\PropertyReservation;
use App\Models\SubAgentReservation;
use App\Models\User;
use Dompdf\Dompdf;
use Dompdf\Options;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Number;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Spatie\Browsershot\Browsershot;

class PaymentsInvoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
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
        ])->filter(request(['search','status']))->get();
        
        return Inertia::render('PaymentsInvoice/Index',[
            'property' => $property,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $currentUser = Auth::user();
        $properties = Project::with('phase')->get();

        $phase = null;
        $phaseFilter = null;
        $blocks = null;
        $blockFilter = null;
        $lot = null;
        $lotFilter = null;
        $property = null;

        if (request('project')) {
            $project = request('project');

            $phase = Phase::where('project_id', $project)->get();
            $phaseFilter = $this->formattedDetails($phase, 'id', 'phase_name', '');
        }

        if (request('phase')) {
            $phase = request('phase');
            $blocks = Block::where('phase_id', $phase)->get();
            $blockFilter = $this->formattedDetails($blocks, 'id', 'block_number', 'Block ');
        }

        if (request('block')) {
            $block = request('block');
            $lot = Lot::where('block_id', $block)
                ->whereNotIn('id', function ($query) {
                    $query->select('lot_id')
                        ->from('property_reservations');
                })
                ->get();
            $lotFilter = $this->formattedDetails($lot, 'id', 'lot_name', '');
        }

        if (request('lot')) {
            $property = Lot::with('block', 'block.phase')->where('id', request('lot'))->first();
        }

        $user = User::orderBy('fname', 'asc')
            ->where('id', '!=', $currentUser->id)
            ->get();

        $userDetails = $this->generateContactDetails($user);

        $projectFilter = $this->formattedDetails($properties, 'id', 'name', '');

        return Inertia::render('PaymentsInvoice/Create', [
            'projectFilter' => $projectFilter,
            'phaseFilter' => $phaseFilter,
            'blockFilter' => $blockFilter,
            'lotFilter' => $lotFilter,
            'userDetails' => $userDetails,
            'property' => $property,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $currentUser = Auth::user();
        $roles = $currentUser->getRoleNames()->toArray();
        try {
            //dd($request);
            $validatedData = $request->validate($this->getReservationValidationRules($request));
            $validatedData['invoice_number'] = $this->generateInvoiceNumber();
            $validatedData['status'] = $request->status ? $request->status : 'Reserved';
            
            $reservation = PropertyReservation::create($validatedData);
            Lot::where('id',$validatedData['lot_id'])->update(['status' => $request->status ? $request->status : 'Reserved']);

            $filteredSubAgentIds = array_filter($request->sub_agent_id, function($value) {
                return $value !== null;
            });
    
            if (!empty($filteredSubAgentIds)) {
                $subAgentReservations = [];
                foreach ($request->sub_agent_id as $key => $value) {
                    $subAgentReservations[] = [
                        'property_reservation_id' => $validatedData['invoice_number'],
                        'sub_agent_id' => $value,
                        'sub_agent_com' => 0,
                    ];
                }

                SubAgentReservation::insert($subAgentReservations);
            }
            
            if($roles[0] == 'administrator'){
                return Redirect::to('/payments-invoice')->with('message', 'Reservation has been created successfully.');
            }else{
                return Redirect::back()->with('message', 'Reservation has been created successfully. Please wait for approval');
            }
        } catch (ValidationException $e) {
            return Redirect::back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function updateInvoice(Request $request,PropertyReservation $paymentsInvoice){
        $validatedData = $request->validate($this->getReservationValidationRules($paymentsInvoice));   
        $validatedData['status'] = 'Reserved';

        Lot::where('id',$validatedData['lot_id'])->update(['status' => $request->status ? $request->status : 'Reserved']);

        $paymentsInvoice->update($validatedData); 

        $filteredSubAgentIds = array_filter($request->sub_agent_id, function($value) {
            return $value !== null;
        });

        if (!empty($filteredSubAgentIds)) {
            $subAgentReservations = [];
            foreach ($request->sub_agent_id as $key => $value) {
                $subAgentReservations[] = [
                    'property_reservation_id' => $paymentsInvoice->invoice_number, 
                    'sub_agent_id' => $value,
                    'sub_agent_com' => $request->sub_agent_com[$key],
                ];
            }


            SubAgentReservation::where('property_reservation_id', $paymentsInvoice->invoice_number)->delete();
            SubAgentReservation::insert($subAgentReservations);
        }

        return Redirect::to('/payments-invoice')->with('message', 'Reservation has been created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(PropertyReservation $paymentsInvoice)
    {
        $paymentsInvoice->load('lot','lot.block', 'lot.block.phase.project.land','client')->get();
    
        return Inertia::render('PaymentsInvoice/Show',[
            'property' => $paymentsInvoice,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PropertyReservation $paymentsInvoice)
    {
        
        $currentUser = Auth::user();
        $properties = Project::with('phase')->get();

        $phase = null;
        $phaseFilter = null;
        $blocks = null;
        $blockFilter = null;
        $lot = null;
        $lotFilter = null;
        $property = null;

        $currentProperty = $paymentsInvoice->load('lot.block.phase.project.land','subAgentReservations');

        if (request('project')) {
            $project = request('project');

            $phase = Phase::where('project_id', $project)->get();
            $phaseFilter = $this->formattedDetails($phase, 'id', 'phase_name', '');
        }

        if (request('phase')) {
            $phase = request('phase');
            $blocks = Block::where('phase_id', $phase)->get();
            $blockFilter = $this->formattedDetails($blocks, 'id', 'block_number', 'Block ');
        }

        if (request('block')) {
            $block = request('block');
            $lot = Lot::where('block_id', $block)
                ->whereIn('id', function ($query) {
                    $query->select('lot_id')
                        ->from('property_reservations');
                })
                ->get();
            $lotFilter = $this->formattedDetails($lot, 'id', 'lot_name', '');
        }

        if (request('lot')) {
            $property = Lot::with('block', 'block.phase')->where('id', request('lot'))->first();
        }

        $user = User::orderBy('fname', 'asc')
            ->where('id', '!=', $currentUser->id)
            ->get();

        $userDetails = $this->generateContactDetails($user);

        $projectFilter = $this->formattedDetails($properties, 'id', 'name', '');

        return Inertia::render('PaymentsInvoice/Edit', [
            'projectFilter' => $projectFilter,
            'phaseFilter' => $phaseFilter,
            'blockFilter' => $blockFilter,
            'lotFilter' => $lotFilter,
            'userDetails' => $userDetails,
            'property' => $property,
            'current' => $currentProperty,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, PaymentsInvoice $paymentsInvoice)
    {   

        $validatedData = $request->validate($this->getLedgerRules($paymentsInvoice));
       
        if($request->hasFile('pdf')) {
            $file = $request->pdf;
            $filename = $validatedData['invoice_number'] .'-3DG.' . 'pdf';
            
            if (!Storage::disk('public')->exists('ledger/' . $filename)) {
                $file->storeAs('ledger', $filename);

                $validatedData['pdf'] = $filename;
                $invoice = PropertyLedger::create($validatedData);
                PropertyReservation::where('invoice_number', $validatedData['invoice_number'])
                ->update(['status' => $request->method]);
                
                // Generate Ledger

                if($request->ledger != null){
                    foreach ($request->ledger as $key => $value) {
                        $terms = $key + 1;
                        $amortization = $value['amortization'];
                        $begin = $value['begin'];
                        $end = $value['end'];
                        $due_date = $value['dueDate'];
                        $paid_amount = 0;
                        $payment_status = 'Unpaid';
    
    
                        PropertyLedgerTransaction::create([
                            'property_ledger_id' => $invoice->id,
                            'terms' => $terms,
                            'due_date' => $due_date,
                            'begin_balance' => $begin,
                            'monthly_payment' => $amortization,
                            'end_balance' => $end,
                            'paid_amount' => $paid_amount,
                            'payment_status' => $payment_status,
                        ]);
                    }
                }

                // Send to email
                $client = User::where('email', $request->email)->first();

                $clientName = $client->fname;

                $sent = Mail::to($request->email)->send(new SendInvoice($invoice,$clientName));

                if ($sent === null) {
                    // Email sending failed
                    return Redirect::back()->with('message', 'Failed to send invoice email');
                }
                
                return Redirect::to('/payments-invoice')->with('message', 'Transaction has been saved successfully.');
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PaymentsInvoice $paymentsInvoice)
    {
        //
    }

    public function formattedDetails(Collection $objects, $idKey, $labelKey, $labelPrefix): array
    {
        $formattedObjects = [];

        foreach ($objects as $object) {
            $formattedObjects[] = [
                'value' => $object->$idKey, // Accessing dynamic id key
                'label' => $labelPrefix . $object->$labelKey, // Accessing dynamic label key
            ];
        }

        return $formattedObjects;
    }

    function generateContactDetails(Collection $user): array
    {
        $userDetails = $user->map(function ($user) {
            return [
                'value' => $user->id,
                'label' => $user->fname . ' ' . $user->lname,
            ];
        })->toArray();

        // If the collection is empty, add a default empty entry
        if (empty($userDetails)) {
            $userDetails[] = [
                'value' => '',
                'label' => '',
            ];
        }

        return $userDetails;
    }

    private function getLedgerRules($forUpdate = false)
    {
        $rules = [
            'invoice_number' => ['required', 'exists:property_reservations,invoice_number'],
            'downpayment' => ['nullable', 'numeric', 'min:0'],
            'discount' => ['nullable', 'numeric', 'min:0'],
            'terms' => ['nullable', 'numeric', 'min:0'],
            'tax' => ['nullable', 'numeric', 'min:0'],
            'interest' => ['nullable', 'numeric', 'min:0'],
            'plan' => ['required'],
            'total_amount' => ['required', 'numeric', 'min:0'],
            'pdf' => ['required'],
            'email' => ['required'],
        ];

        return $rules;
    }

    private function getReservationValidationRules($forUpdate = false)
    {
        $rules = [
            'lot_id' => ['required', 'exists:lots,id'],
            'per_sqm_price' => ['nullable'],
            'total_price' => ['required', 'numeric', 'min:0'],
            'client_id' => ['required', 'exists:users,id'],
            'broker_id' => ['required', 'exists:users,id'],
            'broker_com' => ['required', 'numeric', 'min:0', 'max:100'],
            'agent_id' => ['required', 'exists:users,id'],
            'agent_com' => ['required', 'numeric', 'min:0', 'max:100'],
            'pay_method' => ['required'],
            'reservation_fee' => ['required', 'numeric', 'min:0'],
        ];

        return $rules;
    }

    public function generateInvoiceNumber()
    {
        $lastInvoiceNumber = PropertyReservation::max('invoice_number');
        $lastNumber = ($lastInvoiceNumber) ? (int)substr($lastInvoiceNumber, 3) : 0;
        $nextNumber = $lastNumber + 1;
        return 'INV' . str_pad($nextNumber, 8, '0', STR_PAD_LEFT);
    }




}

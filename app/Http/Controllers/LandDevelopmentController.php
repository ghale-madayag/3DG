<?php

namespace App\Http\Controllers;

use App\Models\Block;
use App\Models\Contact;
use App\Models\LandDevelopment;
use App\Models\LandDevelopmentAttachements;
use App\Models\Lot;
use App\Models\Phase;
use App\Models\User;
use App\Rules\UniquePhaseName;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class LandDevelopmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //$land = LandDevelopment::orderby('created_at','desc')->get();
        $land = LandDevelopment::with('attachments', 'seller', 'owner')
            ->orderby('created_at','desc')
            ->get();

        return Inertia::render('Land/Index',[
            'lands' => $land,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        $currentUser = Auth::user();

        $user = User::orderBy('fname', 'asc')
            ->where('id', '!=', $currentUser->id)
            ->get();
        $userDetails = $this->generateContactDetails($user);

        return Inertia::render('Land/Create',[
            'contacts' => $userDetails,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate($this->getValidationRules($request));
        $landDevelopment = LandDevelopment::create($validatedData);

         // Process attachments if any
         if ($request->hasFile('attachments')) {
            foreach ($request->file('attachments') as $file) {
                // Generate unique filename based on hash and timestamp
                $hash = md5_file($file->path()); // Generate hash of file content
                $timestamp = time(); // Current timestamp
                $extension = $file->getClientOriginalExtension(); // Get original file extension
                $filename = $hash . '_' . $timestamp . '.' . $extension;
        
                // Check if file with the same hash already exists
                if (!Storage::disk('public')->exists('land/' . $filename)) {
                    // Store the uploaded file with the generated filename under the 'land' directory
                    $file->storeAs('land', $filename);

                    // Save the size of the file
                    $size = $file->getSize();
        
                    // Create a new LandDevelopmentAttachment instance
                    $attachment = new LandDevelopmentAttachements();
                    $attachment->file_name = $filename;
                    $attachment->size = $size;
                    $attachment->land_development_id = $landDevelopment->id;
                    $attachment->save();
                }
            }
        }

        return Redirect::to('/land/'.$landDevelopment->slug.'/edit')->with('message', 'Land has been created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(LandDevelopment $landDevelopment)
    {
        $land = $landDevelopment->load('attachments','seller','owner');
        $land->seller->phone = $landDevelopment->seller->formatted_phone;

        $blocks = Block::with('phase')->whereHas('phase', function ($query) use ($landDevelopment) {
            $query->where('land_development_id', $landDevelopment->id);
        })->filter(request(['phase']))
        ->get();

        $phasesLot = Block::with('phase','lot')->whereHas('phase', function ($query) use ($landDevelopment) {
            $query->where('land_development_id', $landDevelopment->id);
        })->filter(request(['phase','block']))
        ->get();

        $phasesFilterVal = Phase::where('land_development_id', $landDevelopment->id)->get();
        
        $formattedData = $phasesLot->flatMap(function ($block) {
            return $block->lot->map(function ($lot) use ($block) {
                return (object) [
                    'id' => $lot->id,
                    'name' => "Lot $lot->lot_number",
                    'size' => $lot->size,
                    'status' => 'Available',
                    'created_at' => $lot->created_at,
                    'details' => $lot->details,
                    'blk_name' => "Block $block->block_number",
                    'phase_name' => $block->phase->phase_name
                ];
            });
        });

        $phaseFilter = $this->formattedDetails($phasesFilterVal, 'id', 'phase_name', '');
        $blockFilter = $this->formattedDetails($blocks, 'id', 'block_number', 'Block ');

        return Inertia::render('Land/Develop',[
            'land' => $land,
            'phaseVal' => $phasesFilterVal,
            'blockVal' => $blocks,
            'phaseFilter' => $phaseFilter,
            'blockFilter' => $blockFilter,
            'phaseDetails' => $formattedData
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(LandDevelopment $landDevelopment)
    {

        $contacts = Contact::orderBy('fname', 'asc')->get();
        $contactDetails = $this->generateContactDetails($contacts);

        $landDevelopment->load('attachments', 'seller', 'owner');

        // Format seller details
        $sellerDetails = $landDevelopment->seller ? $landDevelopment->seller->formattedDetails() : null;
        $ownerDetails = $landDevelopment->owner ? $landDevelopment->owner->formattedDetails() : null;

        return Inertia::render('Land/Edit',[
            'land' => $landDevelopment,
            'contacts' => $contactDetails,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, LandDevelopment $landDevelopment)
    {
        $validatedData = $request->validate($this->getValidationRules($landDevelopment));   
        
        $landDevelopment->update($validatedData); 

        return Redirect::to('/land/'.$landDevelopment->slug.'/edit');


    }

    public function phase(Request $request, LandDevelopment $landDevelopment){
        try {
            $validatedData = $request->validate([
                'phase' => 'array|required',
                'block' => 'array|required',
            ]);
    
            foreach ($validatedData['phase'] as $index => $phaseName) {
                // Validate phase_name uniqueness within the specified land_development_id
                $request->validate([
                    "phase.{$index}" => ['required', 'string', new UniquePhaseName($landDevelopment->id)],
                ]);

                // Find the last block number for this phase
                $lastBlockNumber = Block::whereHas('phase', function ($query) use ($phaseName, $landDevelopment) {
                    $query->where('land_development_id', $landDevelopment->id);
                })->max(DB::raw('CAST(block_number AS UNSIGNED)')) ?? 0;
    
                $phase = Phase::create([
                    'phase_name' => $phaseName,
                    'land_development_id' => $landDevelopment->id
                ]);
    
                for ($i = 0; $i < $validatedData['block'][$index]; $i++) {
                    Block::create([
                        'block_number' => ++$lastBlockNumber,
                        'phase_id' => $phase->id,
                    ]);
                }
            }
    
        } catch (ValidationException $e) {
            dd($e);
            // Handle validation errors
            return Redirect::back()->withErrors(['error' => 'Somes phase has already exist for the specified land.']);
            //return Redirect::to('/land/'.$landDevelopment->slug)->with('message', ['error' => $e->errors()])->withStatus(422);

        }
    
        // Successfully processed the data
        return redirect()->back();
        
    }

    public function lot(Request $request, LandDevelopment $landDevelopment){

        $validatedData = $request->validate([
            'phase' => 'required',
            'block' => 'required',
            'lot' => 'required',
        ]);

        $lastLotNumber = Lot::where('block_id', $request->block)
        ->max('lot_number') ?? 0;

        for ($i = 0; $i < $validatedData['lot']; $i++) {
          
            Lot::create([
                'block_id' => $request->block,
                'lot_number' => ++$lastLotNumber,
            ]);
           
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $request->validate([
            'id' => 'required|array',
            'id.*' => 'exists:contacts,id' // Assuming 'contacts' is the table name
        ]);

        $ids = $request->input('id');

        LandDevelopment::whereIn('id', $ids)->delete();
    }

    private function getValidationRules($contact = null)
    {
        $rules = [
            'name' => ['required'],
            'description' => ['nullable'],
            'size' => ['nullable'],
            'ground_breaking' => ['nullable'],
            'seller_id' => ['required'],
            'owner_id' => ['required'],
            'region' => ['nullable'],
            'province' => ['nullable'],
            'municipality' => ['nullable'],
            'barangay' => ['nullable'],
            'address' => ['nullable'],
            
        ];
    
        return $rules;
    }

    function generateContactDetails(Collection $contacts): array{
        $contactDetails = $contacts->map(function ($contact) {
            return [
                'value' => $contact->id,
                'label' => $contact->fname . ' ' . $contact->lname,
            ];
        })->toArray();

        // If the collection is empty, add a default empty entry
        if (empty($contactDetails)) {
            $contactDetails[] = [
                'value' => '',
                'label' => '',
            ];
        }

        return $contactDetails;
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

}

   
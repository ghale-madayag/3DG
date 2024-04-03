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

       // dd($land);

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

        if ($landDevelopment->seller) {
            $land->seller_id = $landDevelopment->seller->id;
        }

        return Inertia::render('Land/Develop',[
            'land' => $land,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(LandDevelopment $landDevelopment)
    {

        $user = User::orderBy('fname', 'asc')->get();
        $userDetails = $this->generateContactDetails($user);

        $landDevelopment->load('attachments', 'seller', 'owner');

        // Format seller details
        $sellerDetails = $landDevelopment->seller ? $landDevelopment->seller->formattedDetails() : null;
        $ownerDetails = $landDevelopment->owner ? $landDevelopment->owner->formattedDetails() : null;

        return Inertia::render('Land/Edit',[
            'land' => $landDevelopment,
            'contact' => $userDetails,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, LandDevelopment $landDevelopment)
    {
        $validatedData = $request->validate($this->getValidationRules($landDevelopment));   
        
        $landDevelopment->update($validatedData); 

        if($request->oldattachments){
            foreach ($request->oldattachments as $file) {
                // Your existing code to upload files goes here
                // Delete the file and corresponding record if it already exists
                $existingAttachment = LandDevelopmentAttachements::where('file_name', $file)->first();
                if ($existingAttachment) {
                    // Delete the file from the storage folder
                    Storage::disk('public')->delete('land/' . $file);
                    
                    // Delete the record from the database
                    $existingAttachment->delete();
                }
        
            }
        }
        
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

        return Redirect::to('/land/'.$landDevelopment->slug.'/edit');


    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $request->validate([
            'id' => 'required|array',
        ]);

        $ids = $request->input('id');

        $attachments =  LandDevelopmentAttachements::whereIn('land_development_id', $ids)->get();

       

        foreach ($attachments as $attachment) {
            // Retrieve associated images for each land development
            $images = $attachment->file_name;
           
            Storage::disk('public')->delete('land/' . $images);

        }
    

        LandDevelopment::whereIn('id', $ids)->delete();


    }

    private function getValidationRules($contact = null)
    {
        $rules = [
            'name' => ['required'],
            'description' => ['nullable'],
            'size' => ['nullable'],
            'ground_breaking' => ['nullable'],
            'seller_id' => ['nullable'],
            'owner_id' => ['nullable'],
            'region' => ['required'],
            'province' => ['required'],
            'municipality' => ['required'],
            'barangay' => ['required'],
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

   
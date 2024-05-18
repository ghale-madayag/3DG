<?php

namespace App\Http\Controllers;

use App\Models\AgentClient;
use App\Models\Block;
use App\Models\LandDevelopment;
use App\Models\Lot;
use App\Models\LotImages;
use App\Models\Phase;
use App\Models\Project;
use App\Models\ProjectAttachements;
use App\Models\ProjectImages;
use App\Models\User;
use App\Rules\UniquePhaseName;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Pagination\Paginator;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Auth;
use Laravel\Jetstream\Agent;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $project = Project::with('attachments','land','images')->get();

        return Inertia::render('Project/Index',[
            'project' => $project,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        $land = LandDevelopment::orderby('created_at','desc')->get();
        

        $landFormatted = $this->formattedDetails($land,'id','name','');
        
        return Inertia::render('Project/Create',[
            'land' => $landFormatted,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        try {
            $validatedData = $request->validate($this->getValidationRules($request));
            $project = Project::create($validatedData);
    
           
            foreach ($validatedData['phase'] as $index => $phaseName) {
                $request->validate([
                    "phase.{$index}" => ['required', 'string', new UniquePhaseName($project->id)],
                ]);
    
                $lastBlockNumber = Block::whereHas('phase', function ($query) use ($phaseName, $project) {
                    $query->where('project_id', $project->id);
                })->max(DB::raw('CAST(block_number AS UNSIGNED)')) ?? 0;
    
                $phase = Phase::create([
                    'phase_name' => $phaseName,
                    'project_id' => $project->id
                ]);
    
                for ($i = 0; $i < $validatedData['block'][$index]; $i++) {
                    Block::create([
                        'block_number' => ++$lastBlockNumber,
                        'phase_id' => $phase->id,
                    ]);
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
                    if (!Storage::disk('public')->exists('project/attachements' . $filename)) {
                        // Store the uploaded file with the generated filename under the 'land' directory
                        $file->storeAs('project/attachements', $filename);
    
                        // Save the size of the file
                        $size = $file->getSize();
            
                        // Create a new LandDevelopmentAttachment instance
                        $attachment = new ProjectAttachements();
                        $attachment->file_name = $filename;
                        $attachment->size = $size;
                        $attachment->project_id = $project->id;
                        $attachment->save();
                    }
                }
            }

            if ($request->hasFile('images')) {
                foreach ($request->file('images') as $file) {
                    // Generate unique filename based on hash and timestamp
                    $hash = md5_file($file->path()); // Generate hash of file content
                    $timestamp = time(); // Current timestamp
                    $extension = $file->getClientOriginalExtension(); // Get original file extension
                    $filename = $hash . '_' . $timestamp . '.' . $extension;
            
                    // Check if file with the same hash already exists
                    if (!Storage::disk('public')->exists('project/images/' . $filename)) {
                        // Store the uploaded file with the generated filename under the 'land' directory
                        $file->storeAs('project/images/', $filename);
    
                        // Save the size of the file
                        $size = $file->getSize();
            
                        // Create a new LandDevelopmentAttachment instance
                        $attachment = new ProjectImages();
                        $attachment->file_name = $filename;
                        $attachment->size = $size;
                        $attachment->project_id = $project->id;
                        $attachment->save();
                    }
                }
            }
            

        }catch (ValidationException $e) {
             return Redirect::back()->withErrors(['error' => $e->getMessage()]);
        }

        return Redirect::to('/project/'.$project->slug.'/edit')->with('message', 'Project has been created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        $project->load('images','attachments','land','phase');
        
        $blocks = Block::with('phase','lot.lot_images')->whereHas('phase', function ($query) use ($project) {
            $query->where('project_id', $project->id);
        })->filter(request(['phase','block']))
        ->get();

        $formattedData = $blocks->flatMap(function ($block) {
            return $block->lot->map(function ($lot) use ($block) {
                $images = [];
                foreach ($lot->lot_images as $image) {
                    $images[] = [
                        'id' => $image->id,
                        'file_name' => $image->file_name,
                        'size' => $image->size
                    ];
                }

                return (object) [
                    'id' => $lot->id,
                    'lot_number' => $lot->lot_number,
                    'lot_name' => $lot->lot_name ? $lot->lot_name : "Lot ".$lot->lot_number,
                    'size' => $lot->size ? $lot->size : '',
                    'status' => $lot->status,
                    'created_at' => $lot->created_at,
                    'category' => $lot->category,
                    'blk_name' => "Block $block->block_number",
                    'phase_name' => $block->phase->phase_name,
                    'description' => $lot->description,
                    'images' => $images
                ];
            });
        });

        $phaseFilter = $this->formattedDetails($project->phase, 'id', 'phase_name', '');
        $blockFilter = $this->formattedDetails($blocks, 'id', 'block_number', 'Block ');

        return Inertia::render('Project/Show',[
            'project' => $project,
            'phaseFilter' => $phaseFilter,
            'blockFilter' => $blockFilter,
            'phaseDetails' => $formattedData,
            'blockVal' => $blocks,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        $project->load('attachments','land','images');

        $land = LandDevelopment::orderby('created_at','desc')->get();

        $landFormatted = $this->formattedDetails($land,'id','name','');

        return Inertia::render('Project/Edit',[
            'project' => $project,
            'land' => $landFormatted,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Project $project)
    {
        $validatedData = $request->validate($this->getValidationRules($project));   
        
        $project->update($validatedData); 

        if($request->oldattachments){
            foreach ($request->oldattachments as $file) {
                // Your existing code to upload files goes here
                // Delete the file and corresponding record if it already exists
                $existingAttachment = ProjectAttachements::where('file_name', $file)->first();
                if ($existingAttachment) {
                    // Delete the file from the storage folder
                    Storage::disk('public')->delete('project/attachements/' . $file);
                    
                    // Delete the record from the database
                    $existingAttachment->delete();
                }
        
            }
        }

        if($request->oldimages){
            foreach ($request->oldimages as $file) {
                // Your existing code to upload files goes here
                // Delete the file and corresponding record if it already exists
                $existingAttachment = ProjectImages::where('id', $file)->first();
                if ($existingAttachment) {
                    // Delete the file from the storage folder
                    Storage::disk('public')->delete('project/images/' . $existingAttachment->file_name);
                    
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
                if (!Storage::disk('public')->exists('project/attachements' . $filename)) {
                    // Store the uploaded file with the generated filename under the 'land' directory
                    $file->storeAs('project/attachements', $filename);

                    // Save the size of the file
                    $size = $file->getSize();
        
                    // Create a new LandDevelopmentAttachment instance
                    $attachment = new ProjectAttachements();
                    $attachment->file_name = $filename;
                    $attachment->size = $size;
                    $attachment->project_id = $project->id;
                    $attachment->save();
                }
            }
        }

        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $file) {
                // Generate unique filename based on hash and timestamp
                $hash = md5_file($file->path()); // Generate hash of file content
                $timestamp = time(); // Current timestamp
                $extension = $file->getClientOriginalExtension(); // Get original file extension
                $filename = $hash . '_' . $timestamp . '.' . $extension;
        
                // Check if file with the same hash already exists
                if (!Storage::disk('public')->exists('project/images/' . $filename)) {
                    // Store the uploaded file with the generated filename under the 'land' directory
                    $file->storeAs('project/images/', $filename);

                    // Save the size of the file
                    $size = $file->getSize();
        
                    // Create a new LandDevelopmentAttachment instance
                    $attachment = new ProjectImages();
                    $attachment->file_name = $filename;
                    $attachment->size = $size;
                    $attachment->project_id = $project->id;
                    $attachment->save();
                }
            }
        }

        return Redirect::to('/project/'.$project->slug.'/edit');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
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

    private function getValidationRules($project = null)
    {
        $rules = [
            'name' => ['required'],
            'description' => ['nullable'],
            'land_development_id' => ['required'],
            'developer' => ['required'],
            'start_date' => ['required'],
            'end_date' => ['nullable'],
            'total_units' => ['required'],
        ];

        if ($project) {
            $rules['phase'][] = 'nullable';
            $rules['block'][] = 'nullable';
        } else {
            // If it's a store operation, include unique validation for email and phone
            $rules['phase'][] = 'array|required';
            $rules['block'][] = 'array|required';
        }
    
        return $rules;
    }

    public function lot(Request $request, Project $project){

        $validatedData = $request->validate([
            'phase' => 'required',
            'block' => 'required',
            'lot' => 'required',
        ]);

        $totalLots = 0;

        foreach ($project->phase as $phase) {
            foreach ($phase->block as $block) {
                $totalLots += $block->lot->count();
            }
        }

        $lastLotNumber = Lot::where('block_id', $request->block)
        ->max('lot_number') ?? 0;

        $toSave =  $validatedData['lot'];

        $totalUnits = $project->total_units;

        if ($totalLots + $toSave > $totalUnits) {
            return Redirect::back()->withErrors(['error' => 'Exceeded the maximum allowed count of units']);
        }else{
            for ($i = 0; $i < $validatedData['lot']; $i++) {
                Lot::create([
                    'block_id' => $request->block,
                    'lot_number' => ++$lastLotNumber,
                    'lot_name' => 'Lot '. $lastLotNumber,
                    'status' => 'Available',
                ]);
            
            }

            return redirect()->to('/project/'.$project->slug);
        }
       
    }

    public function updateLot(Request $request, Lot $lot){

        $validateLot = $request->validate([
            'lot_name' => 'nullable',
            'size' => 'required|numeric',
            'description' => 'nullable',
            'category' => 'required',
            'type' => 'nullable',
        ]);

        $lot->update($validateLot);

        if($request->old_images){
            foreach ($request->old_images as $file) {
                // Your existing code to upload files goes here
                // Delete the file and corresponding record if it already exists
                $existingAttachment = LotImages::where('id', $file)->first();
                if ($existingAttachment) {
                    // Delete the file from the storage folder
                    Storage::disk('public')->delete('project/lot/' . $existingAttachment->file_name);
                    
                    // Delete the record from the database
                    $existingAttachment->delete();
                }
        
            }
        }

        if($request->hasFile('images')){
            foreach ($request->file('images') as $file) {
                // Generate unique filename based on hash and timestamp
                $hash = md5_file($file->path()); // Generate hash of file content
                $timestamp = time(); // Current timestamp
                $extension = $file->getClientOriginalExtension(); // Get original file extension
                $filename = $hash . '_' . $timestamp . '.' . $extension;
        
                // Check if file with the same hash already exists
                if (!Storage::disk('public')->exists('project/lot/' . $filename)) {
                    // Store the uploaded file with the generated filename under the 'land' directory
                    $file->storeAs('project/lot/', $filename);

                    // Save the size of the file
                    $size = $file->getSize();
        
                    // Create a new LandDevelopmentAttachment instance
                    $attachment = new LotImages();
                    $attachment->file_name = $filename;
                    $attachment->size = $size;
                    $attachment->lot_id = $lot->id;
                    $attachment->save();
                }
            }
        }

        return redirect()->back();
    }

    public function destroyLot(Request $request){

        $ids = $request->input('id');

        Lot::whereIn('id', $ids)->delete();

        return redirect()->back();
    }

    public function destroyBlock(Request $request){
        $ids = $request->input('id');

        Block::whereIn('id', $ids)->delete();

        return redirect()->back();
    }

    public function destroyPhase(Request $request){
        $ids = $request->input('id');
        
        Phase::whereIn('id', $ids)->delete();

        return redirect()->back();
    }

    public function phase(Request $request, Project $project){
        try {
            $validatedData = $request->validate([
                'phase' => 'array|required',
                'block' => 'array|required',
            ]);
    
            foreach ($validatedData['phase'] as $index => $phaseName) {
                // Validate phase_name uniqueness within the specified land_development_id
                $request->validate([
                    "phase.{$index}" => ['required', 'string', new UniquePhaseName($project->id)],
                ]);

                // Find the last block number for this phase
                $lastBlockNumber = Block::whereHas('phase', function ($query) use ($phaseName, $project) {
                    $query->where('project_id', $project->id);
                })->max(DB::raw('CAST(block_number AS UNSIGNED)')) ?? 0;
    
                $phase = Phase::create([
                    'phase_name' => $phaseName,
                    'project_id' => $project->id
                ]);
    
                for ($i = 0; $i < $validatedData['block'][$index]; $i++) {
                    Block::create([
                        'block_number' => ++$lastBlockNumber,
                        'phase_id' => $phase->id,
                    ]);
                }
            }
    
        } catch (ValidationException $e) {
            // Handle validation errors
            return Redirect::back()->withErrors(['error' => 'Somes phase has already exist for the specified land.']);

        }
    
        // Successfully processed the data
        return Redirect::back();
        
    }

    public function property(){

        $properties = Project::with(['images', 'phase.block.lot' => function ($query) {
            $query->where('status', '!=', 'Available'); // Filter lots by status
        }])->filter(request(['project']))
        ->get(); 
        
        $properties->each(function ($property) {
            $totalLots = 0; 
            foreach ($property->phase as $phase) { 
                foreach ($phase->block as $block) {
                    foreach ($block->lot as $lot) { 
                        $totalLots++; 
                    }
                }
            }
            $property->totalLots = $property->total_units - $totalLots;
        });

        return Inertia::render('Property/Index',[
            'properties' => $properties,
        ]);

    }

    public function showProperty(Request $request, Project $project){


        $properties = Lot::with('lot_images','block','block.phase')
        ->whereHas('block.phase', function ($query) use ($project){
            $query->where('project_id', $project->id);
        })->where('status', 'Available')
        ->filter(request(['property','phase','block']))
        ->paginate(9);

        $project->load('phase', 'phase.block');

        $blocks = Block::with('phase','lot.lot_images')->whereHas('phase', function ($query) use ($project) {
            $query->where('project_id', $project->id);
        })->filter(request(['phase','block']))
        ->get();

        $phaseFilter = $this->formattedDetails($project->phase, 'id', 'phase_name', '');
        $blockFilter = $this->formattedDetails($blocks, 'id', 'block_number', 'Block ');

        $project = Project::with(['images', 'land', 'attachments', 'phase.block.lot' => function ($query) {
            $query->where('status', '!=', 'Available'); // Filter lots by status
        }])
        ->where('id', $project->id)
        ->first();

        $project->available = $project->total_units - $project->phase->flatMap->block->flatMap->lot->count();
        
        //client
        $currentUser = Auth::user();
        $roles = $currentUser->getRoleNames()->toArray();
        $clients = null;

        if($roles[0] == 'administrator' ||  $roles[0] == 'superadmin'){
            $clients = User::
            orderBy('created_at', 'desc')
            ->get();
            $clientDetails = $this->generateAgentDetails($clients);


        }else{
            // $clients = $currentUser->agent_client()
            // ->with('user')
            // ->orderBy('created_at', 'desc')
            // ->get();

            $clients = AgentClient::with('user')
            ->orderBy('created_at', 'desc')
            ->get();

            $usersCollection = $clients->map(function ($client) {
                return $client->user;
            })->filter();

            $clientDetails = $clients->map(function ($client) {
                if ($client->user) {
                    return [
                        'value' => $client->user->id,
                        'label' => $client->user->fname . ' ' . $client->user->lname,
                    ];
                }
                return null;
            })->filter(); // This will remove all null values from the collection.

            //dd($usersCollection);

            //$clientDetails = $this->generateAgentDetails($usersCollection);
        }

        //agent
        $agent = User::role('agent')->orderBy('fname', 'asc')
            ->where('id', '!=', $currentUser->id)
            ->get();

        $agentDetails = $this->generateAgentDetails($agent);

        return Inertia::render('Property/Show',[
            'properties' => $properties,
            'project' => $project,
            'phaseFilter' => $phaseFilter,
            'blockFilter' => $blockFilter,
            'clients' => $clientDetails,
            'agents' => $agentDetails
        ]);
    }

    function generateContactDetails(Collection $user): array
    {
        $userDetails = $user->map(function ($user) {
            return [
                'value' => $user->user->id,
                'label' => $user->user->fname . ' ' . $user->user->lname,
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

    function generateAgentDetails(Collection $user): array
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
}

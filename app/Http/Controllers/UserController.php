<?php

namespace App\Http\Controllers;

use App\Jobs\SendEmailJob;
use App\Mail\WelcomeEmail;
use App\Models\AgentClient;
use App\Models\Contact;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class UserController extends Controller
{
    protected $creator;

    public function __construct(CreatesNewUsers $creator)
    {
        $this->creator = $creator;
    }

    public function index()
    {

        $currentUser = Auth::user();

        $roles = $currentUser->getRoleNames()->toArray();
        $formattedData = User::with('agent_client')
            ->where('id', '!=', $currentUser->id)
            ->orderBy('created_at', 'desc');

       
        // Check if the user has a role of 'superadmin'
        if ($roles[0] == 'superadmin') {
            // No additional filtering needed for 'superadmin', display all users
            $formattedData = $formattedData->where('id','!=',1)->get();

            $formattedData = $formattedData->map(function ($user) {
                $user->phone = $user->formatted_phone;
                $roles = $user->getRoleNames()->toArray();
                $user->roles = $roles;
                $user->dec = Crypt::encrypt($user->id);
                return $user;
            });
        } elseif ($roles[0] == 'administrator') {
            // Additional filtering needed for 'administrator' to hide 'superadmin' users
            $formattedData = $formattedData->whereDoesntHave('roles', function ($query) {
                $query->where('name', 'superadmin');
            })->get();
            
            $formattedData = $formattedData->map(function ($user) {
                $user->phone = $user->formatted_phone;
                $roles = $user->getRoleNames()->toArray();
                $user->roles = $roles;
                $user->dec = Crypt::encrypt($user->id);
                return $user;
            });
        }else{
            $users = $currentUser->agent_client()
                ->with('user')
                ->orderBy('created_at', 'desc')
                ->get();

            $formattedData = $users->map(function ($user) {
                $roles = $user->user->getRoleNames()->toArray();
                return (object) [
                    'id' => $user->user->id,
                    'fname' => $user->user->fname,
                    'lname' => $user->user->lname,
                    'phone' => $user->user->phone,
                    'email' => $user->user->email,
                    'address' => $user->user->address,
                    'other_details' => $user->user->other_details,
                    'created_at' => $user->user->created_at,
                    'roles' => $roles,
                ];
            });
        }
        
        // if($roles[0] == 'superadmin'){
        //     $formattedData = User::with('agent_client')
        //         ->where('id', '!=', $currentUser->id)
        //         ->orderBy('created_at', 'desc')->get()->map(function ($user) {
        //             $user->phone = $user->formatted_phone;
        //             $roles = $user->getRoleNames()->toArray();
        //             $user->roles = $roles;
        //             $user->dec = Crypt::encrypt($user->id);
        //             return $user;
        //         });
        
        // }else if($roles[0] == 'administrator'){
        //     $formattedData = User::with('agent_client')
        //         ->where('id', '!=', $currentUser->id)
        //         ->orderBy('created_at', 'desc')->get()->map(function ($user) {
        //             $user->phone = $user->formatted_phone;
        //             $roles = $user->getRoleNames()->toArray();
        //             $user->roles = $roles;
        //             $user->dec = Crypt::encrypt($user->id);
        //             return $user;
        //         });
        // }else{
        //     $users = $currentUser->agent_client()
        //     ->with('user')
        //     ->orderBy('created_at', 'desc')
        //     ->get();

        //     $formattedData = $users->map(function ($user) {
        //         $roles = $user->user->getRoleNames()->toArray();
        //         return (object) [
        //             'id' => $user->user->id,
        //             'fname' => $user->user->fname,
        //             'lname' => $user->user->lname,
        //             'phone' => $user->user->phone,
        //             'email' => $user->user->email,
        //             'address' => $user->user->address,
        //             'other_details' => $user->user->other_details,
        //             'created_at' => $user->user->created_at,
        //             'roles' => $roles,
        //         ];
        //     });
        // }


        return Inertia::render('User/Index',[
            'contacts' => $formattedData,
        ]);
    }

    public function store(Request $request, User $user)
    {

        $validatedData = $request->validate($this->getValidationRules($user)); 
        $password = Str::random(8);
        $user = $this->creator->create(array_merge($validatedData,['password'=> $password]));
        $user['password'] = $password;

        $agentId = auth()->id(); 
        
        AgentClient::create([
            'agent_id' => $agentId,
            'client_id' => $user->id,
        ]);
        
        $this->sendEmailVerification($user, $request->roles);

        return Redirect::back()->with('message', 'Registered Successfully. Please inform them to verify using their email address');
    }

    public function update(Request $request, User $user)
    {


        $validatedData = $request->validate($this->getValidationRules($user));   
        
        $user->update($validatedData);

        if ($request->has('roles')) {
            // Sync the roles with the user
            $user->syncRoles($request->roles);
        }
        
    }

    private function getValidationRules($contact = null)
    {
        $rules = [
            'name' => ['required', 'max:50'],
            'fname' => ['required', 'max:50'],
            'lname' => ['required', 'max:50'],
            'phone' => ['required', 'max:50'],
            'email' => ['required', 'max:50', 'email'],
            'address' => ['required'],
            'other_details' => ['nullable']
        ];
    
        // If $contact is provided (for update), exclude unique validation for email and phone
        if ($contact) {
            $rules['phone'][] = 'unique:users,phone,' . $contact->id;
            $rules['email'][] = 'unique:users,email,' . $contact->id;
        } else {
            // If it's a store operation, include unique validation for email and phone
            $rules['phone'][] = 'unique:users';
            $rules['email'][] = 'unique:users';
        }
    
        return $rules;
    }

    private function sendEmailVerification($user, $roles)
    {

        if($roles=='administrator'){
            $user->assignRole('administrator');
            Mail::to($user)->queue(new WelcomeEmail($user));
        }elseif($roles=='staff'){
            $user->assignRole('staff');
            Mail::to($user)->queue(new WelcomeEmail($user));
        }elseif($roles=='agent'){
            $user->assignRole('agent');
            Mail::to($user)->queue(new WelcomeEmail($user));
        }elseif($roles=='client'){
            $user->assignRole('client');

           SendEmailJob::dispatch($user);
        }else{
            $user->assignRole('contact');
        }
    }

    public function destroy(Request $request)
    {
        $request->validate([
            'id' => 'required|array',
            'id.*' => 'exists:users,id' // Assuming 'contacts' is the table name
        ]);

        $ids = $request->input('id');

        User::whereIn('id', $ids)->delete();
        return redirect('/user');
    }
}

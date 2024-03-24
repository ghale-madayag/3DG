<?php

namespace App\Http\Controllers;

use App\Mail\WelcomeEmail;
use App\Models\Contact;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
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
        // Retrieve contacts with formatted phone numbers
        // $contacts = Contact::orderBy('created_at', 'desc')->get()->map(function ($contact) {
        //     $contact->phone = $contact->formatted_phone;
        //     return $contact;
        // });

        $currentUser = Auth::user();

        $user = User::where('id', '!=', $currentUser->id)
            ->where('id', '!=', '1')
            ->orderBy('created_at', 'desc')->get()->map(function ($user) {
            $user->phone = $user->formatted_phone;
            $roles = $user->getRoleNames()->toArray();
            $user->roles = $roles;
            return $user;
        });

        return Inertia::render('User/Index',[
            'contacts' => $user,
        ]);
    }

    public function store(Request $request, User $user)
    {

        $validatedData = $request->validate($this->getValidationRules($user)); 
        $password = Str::random(8); // Adjust the length of the password as needed
        $user = $this->creator->create(array_merge($validatedData,['password'=> $password]));
        $user['password'] = $password;


        if($request->roles=='administrator'){
            $user->assignRole('administrator');
            Mail::to($user)->send(new WelcomeEmail($user));
        }elseif($request->roles=='staff'){
            $user->assignRole('staff');
            Mail::to($user)->send(new WelcomeEmail($user));
        }elseif($request->roles=='agent'){
            $user->assignRole('agent');
            Mail::to($user)->send(new WelcomeEmail($user));
        }elseif($request->roles=='client'){
            $user->assignRole('client');
            Mail::to($user)->send(new WelcomeEmail($user));
        }else{
            $user->assignRole('contact');
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
            $rules['phone'][] = 'unique:contacts,phone,' . $contact->id;
            $rules['email'][] = 'unique:contacts,email,' . $contact->id;
        } else {
            // If it's a store operation, include unique validation for email and phone
            $rules['phone'][] = 'unique:contacts';
            $rules['email'][] = 'unique:contacts';
        }
    
        return $rules;
    }
}

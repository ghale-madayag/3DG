<?php

namespace App\Http\Controllers;

use App\Events\UserRegistered;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Laravel\Fortify\Contracts\CreatesNewUsers;
use Illuminate\Support\Str;
use App\Mail\WelcomeEmail;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    protected $creator;

    public function __construct(CreatesNewUsers $creator)
    {
        $this->creator = $creator;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Retrieve contacts with formatted phone numbers
        $contacts = Contact::orderBy('created_at', 'desc')->get()->map(function ($contact) {
            $contact->phone = $contact->formatted_phone;
            return $contact;
        });

        return Inertia::render('Contact/Index',[
            'contacts' => $contacts,
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
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
        ]);

        $password = Str::random(8); // Adjust the length of the password as needed
        $user = $this->creator->create(array_merge($request->only(['name', 'email']), ['password' => $password]));
        $user['password'] = $password;

        Mail::to($user)->send(new WelcomeEmail($user));

        dd($user);

    }

    /**
     * Display the specified resource.
     */
    public function show(Contact $contact)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Contact $contact)
    {
       
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Contact $contact)
    {
        //$request['phone'] = $this->sanitizePhoneNumber($request->input('phone'));
        $validatedData = $request->validate($this->getValidationRules($contact));   
        
        $contact->update($validatedData); // Update the contact with validated data
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

        Contact::whereIn('id', $ids)->delete();
        return redirect('/contact');
    }

    private function getValidationRules($contact = null)
    {
        $rules = [
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

    private function sanitizePhoneNumber($phone)
    {
        // Remove formatting characters from phone number
        return str_replace(['(', ')', '-'], '', $phone);
    }
}

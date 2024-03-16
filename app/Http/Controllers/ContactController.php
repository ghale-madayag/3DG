<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
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
        $request['phone'] = $this->sanitizePhoneNumber($request->input('phone'));
        $validatedData = $request->validate($this->getValidationRules());   
        Contact::create($validatedData);
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
        $request['phone'] = $this->sanitizePhoneNumber($request->input('phone'));
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
    }

    private function getValidationRules($contact = null)
    {
        $rules = [
            'fname' => ['required', 'max:50'],
            'lname' => ['required', 'max:50'],
            'phone' => ['required', 'max:50', 'regex:/^\d{12}$/'],
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

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;
    protected $fillable = [
        'fname',
        'lname',
        'phone',
        'email',
        'address',
        'other_details'
    ];

    public function getFormattedPhoneAttribute()
    {
        $phoneNumber = $this->attributes['phone'];
        $formattedPhoneNumber = '(' . substr($phoneNumber, 0, 2) . ')-' . substr($phoneNumber, 2, 3) . '-' . substr($phoneNumber, 5);

        return $formattedPhoneNumber;
    }

    public function formattedDetails()
    {
        return [
            'value' => $this->id,
            'label' => $this->fname . ' ' . $this->lname,
        ];
    }
}

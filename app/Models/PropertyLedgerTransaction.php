<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PropertyLedgerTransaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'property_ledger_id',
        'terms',
        'due_date',
        'begin_balance',
        'monthly_payment',
        'end_balance',
        'paid_amount',
        'payment_status'
    ];

    public function ledger(){
        return $this->belongsTo(PropertyLedger::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Contracts\Auditable;

class PropertyLedgerTransaction extends Model implements Auditable
{
    use HasFactory;
    use \OwenIt\Auditing\Auditable;

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

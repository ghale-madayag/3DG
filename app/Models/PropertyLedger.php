<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PropertyLedger extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'invoice_number',
        'downpayment',
        'terms',
        'discount',
        'tax',
        'interest',
        'time_frame',
        'plan',
        'total_amount',
        'pdf',
    ];

    public function ledger_trans(){
        return $this->hasOne(PropertyLedgerTransaction::class,'property_ledger_id');
    }

    public function ledger_trans_list(){
        return $this->hasMany(PropertyLedgerTransaction::class,'property_ledger_id');
    }
}

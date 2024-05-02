<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubAgentReservation extends Model
{
    use HasFactory;

    protected $fillable = [
        'property_reservation_id',
        'sub_agent_id',
        'sub_agent_com'
    ];

    public function propertyReservation()
    {
        return $this->belongsTo(PropertyReservation::class,'property_reservation_id');
    }

    public function subAgent()
    {
        return $this->belongsTo(User::class, 'sub_agent_id');
    }
}

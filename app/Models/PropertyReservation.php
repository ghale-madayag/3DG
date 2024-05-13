<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Contracts\Auditable;

class PropertyReservation extends Model implements Auditable
{
    use HasFactory;
    use \OwenIt\Auditing\Auditable;
    protected $primaryKey = 'invoice_number';
    public $incrementing = false;

    protected $fillable = [
        'invoice_number',
        'lot_id',
        'per_sqm_price',
        'total_price',
        'client_id',
        'broker_id',
        'broker_com',
        'agent_id',
        'agent_com',
        'pay_method',
        'reservation_fee',
        'status',
        'date_due',
    ];

    public function client()
    {
        return $this->belongsTo(User::class, 'client_id');
    }

    public function broker()
    {
        return $this->belongsTo(User::class, 'broker_id');
    }

    public function agent()
    {
        return $this->belongsTo(User::class, 'agent_id');
    }

    public function lot()
    {
        return $this->belongsTo(Lot::class);
    }

    public function ledger(){
        return $this->hasOne(PropertyLedger::class,'invoice_number');
    }

    public function subAgentReservations()
    {
        return $this->hasMany(SubAgentReservation::class,'property_reservation_id');
    }

    public function scopeFilter($query, array $filters)
    {
        if (isset($filters['search'])) {
            $query->where(function ($query) use ($filters) {
                $query->where('invoice_number', 'like', '%' . $filters['search'] . '%')
                      ->orWhereHas('client', function ($query) use ($filters) {
                          $query->where('fname', 'like', '%' . $filters['search'] . '%');
                      });
            });
        }

        if (isset($filters['status'])) {
            if ($filters['status'] !== 'all') {
                $query->where('status', $filters['status']);
            }
        }

        return $query;
    }
}

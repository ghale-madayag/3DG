<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Block extends Model
{
    use HasFactory;
    protected $fillable = ['block_number', 'phase_id'];

    public function phase()
    {
        return $this->belongsTo(Phase::class, 'phase_id');
    }

    public function lot()
    {
        return $this->hasMany(Lot::class);
    }

    public function scopeFilter($query, array $filters)
    {
        if (isset($filters['phase'])) {
            $query->where('phase_id', $filters['phase']);
        }

        if(isset($filters['phase']) && isset($filters['block'])){
            $query->where('phase_id', $filters['phase'])
                 ->where('id', $filters['block']);
        }

        return $query;
    }
}

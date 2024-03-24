<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Phase extends Model
{
    use HasFactory;
    protected $fillable = ['phase_name', 'land_development_id'];

    public function block()
    {
        return $this->hasMany(Block::class);
    }

    public function scopeFilter($query, array $filters)
    {
        if(isset($filters['phase'])){
            $query->where('id', $filters['phase']);
        }

        return $query;
    }
}

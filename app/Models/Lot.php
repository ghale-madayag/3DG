<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lot extends Model
{
    use HasFactory;

    protected $fillable = ['lot_number', 'block_id', 'size', 'description','lot_name', 'category', 'status'];

    public function scopeFilter($query, array $filters)
    {
        if (isset($filters['property'])) {
            $query->where('lot_name', 'like', '%' . $filters['property'] . '%');
        }

        if (isset($filters['block'])) {
            $query->where('block_id', $filters['block']);
        }

        return $query;
    }

    public function block()
    {
        return $this->belongsTo(Block::class);
    }

    public function lot_images()
    {
        return $this->hasMany(LotImages::class);
    }

}

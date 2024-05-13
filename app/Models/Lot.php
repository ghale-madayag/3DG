<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Contracts\Auditable;

class Lot extends Model implements Auditable
{
    use HasFactory;
    use \OwenIt\Auditing\Auditable;

    protected $fillable = ['lot_number', 'block_id', 'size', 'description','lot_name', 'category', 'status', 'type'];

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

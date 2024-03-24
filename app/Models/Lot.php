<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lot extends Model
{
    use HasFactory;

    protected $fillable = ['lot_number', 'block_id', 'size', 'details'];


    public function block()
    {
        return $this->belongsTo(Block::class);
    }
}

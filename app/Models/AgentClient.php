<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AgentClient extends Model
{
    use HasFactory;

    protected $fillable = [
        'agent_id',
        'client_id',
    ];

    public function user(){
        return $this->belongsTo(User::class, 'client_id');
    }

}

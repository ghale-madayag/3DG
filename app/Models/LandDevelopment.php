<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class LandDevelopment extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'size',
        'ground_breaking',
        'seller_id',
        'owner_id',
        'region',
        'province',
        'municipality',
        'barangay',
        'address',
    ];

    protected static function boot()
    {
        parent::boot();

        static::saving(function ($landDevelopment) {
            // Generate slug from the name attribute
            $slug = Str::slug($landDevelopment->name);
            
            // Check if slug already exists in the database
            $count = static::where('slug', $slug)->where('id', '!=', $landDevelopment->id ?? null)->count();
            if ($count > 0) {
                $slug = $slug . '-' . ($count + 1);
            }

            $landDevelopment->slug = $slug;
        });
    }

    public function attachments()
    {
        return $this->hasMany(LandDevelopmentAttachements::class);
    }

    public function seller()
    {
        return $this->belongsTo(Contact::class, 'seller_id');
    }

    public function owner()
    {
        return $this->belongsTo(Contact::class, 'owner_id');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'land_development_id',
        'developer',
        'total_units',
        'start_date',
        'end_date',
    ];

    public function scopeFilter($query, array $filters)
    {
        if (isset($filters['project'])) {
            $query->where('name', 'like', '%' . $filters['project'] . '%');
        }

        return $query;
    }

    protected static function boot()
    {
        parent::boot();

        static::saving(function ($project) {
            // Generate slug from the name attribute
            $slug = Str::slug($project->name);
            
            // Check if slug already exists in the database
            $count = static::where('slug', $slug)->where('id', '!=', $project->id ?? null)->count();
            if ($count > 0) {
                $slug = $slug . '-' . ($count + 1);
            }

            $project->slug = $slug;
        });
    }

    public function attachments()
    {
        return $this->hasMany(ProjectAttachements::class);
    }

    public function land()
    {
        return $this->belongsTo(LandDevelopment::class,'land_development_id');
    }

    public function images()
    {
        return $this->hasMany(ProjectImages::class);
    }

    public function phase()
    {
        return $this->hasMany(Phase::class);
    }
}

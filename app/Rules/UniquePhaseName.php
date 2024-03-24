<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\Rule;
use App\Models\Phase;

class UniquePhaseName implements Rule
{
    protected $landDevelopmentId;

    public function __construct($landDevelopmentId)
    {
        $this->landDevelopmentId = $landDevelopmentId;
    }

    public function passes($attribute, $value)
    {
        // Check if the phase_name already exists in the phases table for the given land_development_id
        return !Phase::where('phase_name', $value)
            ->where('land_development_id', $this->landDevelopmentId)
            ->exists();
    }

    public function message()
    {
        return 'This phase has already exist for the specified land development.';
    }
}

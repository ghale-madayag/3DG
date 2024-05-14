<?php

namespace App\Listeners;

use Illuminate\Auth\Events\Login;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use OwenIt\Auditing\Models\Audit;

class LogSuccessfulLogin
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(Login $event)
    {
        $user = $event->user;
        // Create an audit entry
        Audit::create([
            'auditable_type' => get_class($user),
            'auditable_id' => $user->id,
            'event' => 'login',
            'url' => request()->fullUrl(),
            'ip_address' => request()->ip(),
            'user_agent' => request()->userAgent(),
            'tags' => 'login',
            'user_id' => $user->id,
            'old_values' => [],
            'new_values' => [],
            'user_type' => 'App\Models\User'
        ]);
    }
}

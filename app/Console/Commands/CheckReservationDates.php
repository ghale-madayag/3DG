<?php

namespace App\Console\Commands;

use App\Mail\OverdueReservationEmail;
use App\Models\Lot;
use App\Models\PropertyReservation;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

class CheckReservationDates extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'reservations:check';
    protected $description = 'Check reservation dates and send emails for overdue reservations';


    /**
     * Execute the console command.
     */
    public function handle()
    {
        $dueDateThreshold = now()->addDays(7);

        $overdueReservations = PropertyReservation::with('client')
            ->where('status', 'Reserved')
            ->where(function ($query) use ($dueDateThreshold) {
                $query->whereDate('date_due', '<', now())
                    ->orWhere(function ($query) use ($dueDateThreshold) {
                        $query->where('date_due', '<', $dueDateThreshold);
                    });
            })
            ->get();

        foreach ($overdueReservations as $reservation) {
            if ($reservation->date_due < now()) {
                // Update the status to 'Overdue' if the due date is before now
                $reservation->update(['status' => 'Overdue']);
                
                //update lot status
                Lot::where('id', $reservation->lot_id)->update(['status' => 'Available']);
                
            } else {
                // Send email and then update status to 'Overdue' if the due date is nearly 7 days from now
                Mail::to($reservation->client->email)->send(new OverdueReservationEmail($reservation));
            }
        }
    }
}

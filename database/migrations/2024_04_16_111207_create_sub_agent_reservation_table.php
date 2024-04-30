<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('sub_agent_reservations', function (Blueprint $table) {
            $table->id();
            $table->string('property_reservation_id')->index();
            $table->foreignId('sub_agent_id')->constrained()->onDelete('cascade');
            $table->decimal('sub_agent_com', 5, 2);
            $table->timestamps();

            $table->foreign('property_reservation_id')
                ->references('invoice_number')
                ->on('property_reservations')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sub_agent_reservations');
    }
};

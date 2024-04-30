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
        Schema::create('property_reservations', function (Blueprint $table) {
            $table->string('invoice_number')->primary();
            $table->foreignId('lot_id')->constrained()->onDelete('cascade');
            $table->decimal('per_sqm_price', 10, 2)->nullable()->default(0);
            $table->decimal('total_price', 10, 2);
            $table->foreignId('client_id')->constrained()->onDelete('cascade');
            $table->foreignId('broker_id')->constrained()->onDelete('cascade');
            $table->unsignedInteger('broker_com')->nullable()->default(0);
            $table->foreignId('agent_id')->constrained()->onDelete('cascade');
            $table->unsignedInteger('agent_com')->nullable()->default(0);
            $table->string('pay_method');
            $table->decimal('reservation_fee', 10, 2);
            $table->string('status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('property_reservations');
    }
};

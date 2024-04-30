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
        Schema::create('property_ledgers', function (Blueprint $table) {
            $table->id();
            $table->string('invoice_number')->unique();
            $table->decimal('downpayment', 10, 2)->nullable()->default(0);
            $table->integer('terms')->nullable()->default(0);
            $table->decimal('discount', 10, 2)->nullable();
            $table->decimal('tax', 10, 2)->nullable();
            $table->decimal('interest', 10, 2)->nullable();
            $table->string('plan');
            $table->decimal('total_amount', 10, 2);
            $table->string('pdf');
            $table->timestamps();

             // Add foreign key constraint to invoice_number column
            $table->foreign('invoice_number')
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
        Schema::dropIfExists('property_ledgers');
    }
};

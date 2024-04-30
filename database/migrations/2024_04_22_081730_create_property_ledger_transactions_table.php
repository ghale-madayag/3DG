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
        Schema::create('property_ledger_transactions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('property_ledger_id')->constrained()->onDelete('cascade');
            $table->integer('terms');
            $table->date('due_date');
            $table->decimal('begin_balance', 10, 2);
            $table->decimal('monthly_payment', 10, 2);
            $table->decimal('end_balance', 10, 2);
            $table->decimal('paid_amount', 10, 2)->default(0);
            $table->string('payment_status')->default('Unpaid');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('property_ledger_transactions');
    }
};

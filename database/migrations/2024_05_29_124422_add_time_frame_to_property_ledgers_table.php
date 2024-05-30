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
        Schema::table('property_ledgers', function (Blueprint $table) {
            $table->string('time_frame')->after('interest')->default('monthly'); // Add your default or adjust as needed
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('property_ledgers', function (Blueprint $table) {
            //
        });
    }
};

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
        Schema::create('land_development_attachements', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('land_development_id');
            $table->foreign('land_development_id')->references('id')->on('land_developments')->onDelete('cascade');
            $table->string('file_name');
            $table->unsignedBigInteger('size')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('land_development_attachements');
    }
};

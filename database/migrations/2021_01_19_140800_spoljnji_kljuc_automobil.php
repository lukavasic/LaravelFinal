<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class SpoljnjiKljucAutomobil extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('automobil', function (Blueprint $table) {
            $table->unsignedBigInteger('kompanija_id');
            $table->foreign('kompanija_id')->references('id')->on('kompanija')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('automobil', function (Blueprint $table) {
            $table->dropForeign('automobil_kompanija_id_foreign');
        });
    }
}

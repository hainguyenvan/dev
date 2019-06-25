<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AccountsAddress extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('AccountsAddress', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('accountsID');
            $table->integer('addressID');
            $table->bigInteger('timeCreated');
            $table->bigInteger('timeModified');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('AccountsAddress');
    }
}

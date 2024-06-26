<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InicioController;

Route::namespace("App\\Http\\Controllers")->group(function () {
    Route::get("/", "InicioController@index");
});
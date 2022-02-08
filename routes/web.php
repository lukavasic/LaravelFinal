<?php

use Illuminate\Support\Facades\Route;
use  App\Http\Controllers\KompanijaController;
use  App\Http\Controllers\HomepageController;
use App\Http\Controllers\AutomobilController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/* Stranica api */
Route::get('/', [HomepageController::class,'kompanijeStranica']);
/* Kompanije api */
Route::get('/kompanije/get', [KompanijaController::class,'ucitavanje']);
Route::get('/kompanije/get-automobili', [KompanijaController::class,'automobili_kompanije']);
/* Automobili api */
Route::get('/automobil/get', [AutomobilController::class,'ucitavanje']);
Route::put('/automobil/izmena', [AutomobilController::class,'izmena']);
Route::post('/automobil/dodavanje', [AutomobilController::class,'dodavanje']);
Route::delete('/automobil/brisanje', [AutomobilController::class,'brisanje']);


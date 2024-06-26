<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DogsController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::middleware('auth')->group(function() {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});
Route::get('/breed/list', [DogsController::class, 'index']);
Route::get('/{breed}/image', [DogsController::class, 'image']);

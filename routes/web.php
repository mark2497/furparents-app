<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UserController;

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
require __DIR__.'/auth.php';

Route::get('/', function () {
    return Inertia::render('Auth/Login', [
        'canResetPassword' => Route::has('password.request'),
        'status' => session('status'),
    ]);
});

Route::middleware(['auth', 'verified'])->group(function() {
    Route::get('/dogs', fn() => Inertia::render('DogsGallery'))->name('dogs-gallery');
    Route::get('/doglovers', [UserController::class, 'getFurParents'])->name('doglovers');
    Route::get('/getUserSelected', [UserController::class, 'getPreferredBreed']);
    Route::post('/setPreferredBreed', [UserController::class, 'setPreferredBreed']);
    Route::get('/details', fn() => Inertia::render('AccountDetails'))->name('details');
    Route::post('/details/update', [UserController::class, 'updateDetails'])->name("account.update");
});


<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VeiculoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Symfony\Component\HttpFoundation\Response;

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/profile', function (Request $request) {
        return response()->json(Auth::user(), Response::HTTP_OK);
    });
});



Route::middleware(['auth:sanctum', 'can:admin'])->group(function () {
Route::apiResource('/categories', CategoryController::class)->except(['index', 'show']);

Route::apiResource('/vehicles', VeiculoController::class)->except(['index', 'show']);
Route::apiResource('/users', UserController::class);
});

Route::get('/vehicles', [VeiculoController::class, 'index']);
Route::get('/vehicles/{id}', [VeiculoController::class, 'show']);
Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/categories/{id}', [CategoryController::class, 'show']);


Route::post('/vehicles/{id}/buy', [VeiculoController::class, 'buy']);

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

require __DIR__.'/auth.php';

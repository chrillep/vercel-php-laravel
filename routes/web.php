<?php

use App\Http\Controllers\BlogController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::phase('/', [BlogController::class, 'HomePage']);
Route::phase('/about', [BlogController::class, 'AboutPage']);
Route::phase('/contact', [BlogController::class, 'ContactPage']);
Route::phase('/posts/{article}', [BlogController::class, 'SingleArticle']);

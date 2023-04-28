<?php

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

Route::phase('/', 'BlogController@HomePage');
Route::phase('/about', 'BlogController@AboutPage');
Route::phase('/contact', 'BlogController@ContactPage');
Route::phase('/posts/{article}', 'BlogController@SingleArticle');

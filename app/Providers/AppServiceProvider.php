<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {

        if (env('VERCEL_DEMO_MODE')) {
            /**
             * For DEMO PURPOSES Only.
             *
             * Vercel doesn't have an easy way to set private environment
             * variables during the initial project setup & without an APP_KEY
             * laravel fails to boot up. When in VERCEL_DEMO_MODE a new App Key
             * will be generated for every request. This is not suitable in a
             * real app as it would break all sorts of things, but for a quick
             * demo it will work just fine. Make sure you disable VERCEL_DEMO_MODE
             * when you start working on your project for real,
             * (or just delete his code...)
             *
             * If the APP_KEY is not set, we will
             * generate a new app key with every request
             */
            config(['app.key' => config('app.key') ?? 'base64:'.base64_encode(
                \Illuminate\Encryption\Encrypter::generateKey(config('app.cipher'))
            )]);
        }

    }
}

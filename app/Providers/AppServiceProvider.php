<?php

namespace App\Providers;

use Illuminate\Support\Facades\App;
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
        if (App::environment('production')) {
            \URL::forceScheme('https');
        }
        /**
         * These directories are required for laravel
         * to operate properly. Under normal circumstances this isn't required
         * however if deploying to a serverless platform such as Vercel, its
         * much easier to ensure these directories exist on every request as
         * the directory must be created in `/tmp` and _not_ in your project
         * directly
         */
        $view = config('view.compiled');
        foreach ([$view] as $path) {
            if (! is_dir($path)) {
                mkdir($path, 0755, true);
            }
        }

    }
}

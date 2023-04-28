<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Phased\State\Traits\Vuexable;

class Article extends Model
{
    use Vuexable;
}

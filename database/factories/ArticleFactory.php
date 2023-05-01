<?php

namespace Database\Factories;

use App\Models\Article;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Article>
 */
class ArticleFactory extends Factory
{
    protected $model = Article::class;

    public function definition(): array
    {
        fake()->seed(1234);
        $title = fake()->sentence(3);
        $content = fake()->realText(fake()->numberBetween(500, 4000));

        return [
            'title' => $title,
            'slug' => Str::slug($title),
            'excerpt' => Str::limit($content, 250),
            'content' => $content,
            'created_at' => fake()->dateTimeBetween('-2 years', 'now'),
        ];
    }
}

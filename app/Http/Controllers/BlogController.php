<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function HomePage()
    {

        // Pull the fake articles from our fake helper
        // generator
        $fakeArticles = $this->getFakerArticles();
        // Add them to our vuex store
        // $store.state.articles.recent
        //        $fakeArticles->toVuex('articles', 'recents');

        return Inertia::render('BlogController/HomePage', [
            'articles.recents' => $fakeArticles,
        ]);
    }

    public function SingleArticle($article)
    {
        // Find the article that matches the slug
        // With real database models we would use Route Model binding
        // but since this is all just fake data, we will just match
        // the slug string here
        $fakeArticle = $this->getFakerArticles()->firstWhere('slug', $article);

        // Set it as the active article
        // $store.state.articles.active
        return Inertia::render('BlogController/SingleArticle', [
            'articles.active' => $fakeArticle,
        ]);
    }

    public function AboutPage()
    {
        $faker = \Faker\Factory::create();
        $faker->seed(1234);

        return Inertia::render('BlogController/AboutPage', [
            'bio' => $faker->paragraphs(3, false),
        ]);
    }

    public function ContactPage()
    {
        $faker = \Faker\Factory::create();
        $faker->seed(4321);

        return Inertia::render('BlogController/ContactPage', [
            'contact' => $faker->paragraphs(3, false),
        ]);
    }

    /**
     * @return Collection|Model
     */
    private function getFakerArticles()
    {
        // Generate a collection of fake blog articles...
        // Our faker has a common seed, so this will always
        // generate the same articles
        return Article::factory(10)->make();
    }
}

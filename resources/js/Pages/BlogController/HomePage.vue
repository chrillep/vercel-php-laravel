<script setup>
import { Link, Head } from '@inertiajs/vue3'
import MainLayout from "@/Layouts/MainLayout.vue";

defineProps({ articles: Object })
</script>

<template>
    <MainLayout>
        <Head title="Main" />

        <div>
            <ul>
                <li v-for="article in articles.recents" :key="article.slug" class="p-8">
                <span class="text-sm font-bold uppercase">
                    {{ new Date(article.created_at).toLocaleString() }}
                </span>
                    <h2>
                        <Link
                            :href="route('posts.show', { article: article.slug })"
                            class="text-2xl font-bold hover:underline cursor-pointer pt-2 pb-4">
                            {{ article.title }}
                        </Link>
                    </h2>
                    <p>{{ article.excerpt }}</p>
                    <div class="pt-4">
                        <Link
                            :href="route('posts.show', { article: article.slug })"
                            class="hover:underline cursor-pointer text-red-600">
                            Read
                        </Link>
                    </div>
                </li>
            </ul>
        </div>
    </MainLayout>
</template>


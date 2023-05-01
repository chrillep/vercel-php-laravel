<script setup>
import { Head } from '@inertiajs/vue3'
import MainLayout from "@/Layouts/MainLayout.vue";

defineProps({ articles: Object })
</script>
<template>
    <MainLayout>
        <Head><title>{{ articles.active.title }}</title></Head>

        <div class="p-8">
            <h2 class="text-4xl font-bold text-center mb-8">{{ articles.active.title }}</h2>
            <p>{{ articles.active.content }}</p>

            <hr class="my-8 border-red-500">

            <p>
                <span class="italic text-gray-600 font-hairline">
                    {{ new Date(articles.active.created_at).toLocaleString() }}
                </span>
                <span class="px-2">—</span>
                <span class="hover:underline">John Doe</span>
            </p>
        </div>
    </MainLayout>
</template>


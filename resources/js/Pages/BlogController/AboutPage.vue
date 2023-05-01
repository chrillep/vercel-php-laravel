<script setup>
import { Head } from '@inertiajs/vue3'
import MainLayout from "@/Layouts/MainLayout.vue";

defineProps({ bio: Array })
</script>
<template>
    <MainLayout>
        <Head title="About Me" />
        <div class="p-8">
            <h1 class="text-4xl">About Me</h1>
            <p
                class="py-2"
                v-for="paragraph in bio"
                :key="paragraph">
                {{ paragraph }}
            </p>
        </div>
    </MainLayout>
</template>

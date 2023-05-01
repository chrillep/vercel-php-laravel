
<script setup>
import { Head } from '@inertiajs/vue3'
import MainLayout from "@/Layouts/MainLayout.vue";

defineProps({ contact: Array })
</script>
<template>
    <MainLayout>
        <Head title="Contact Me" />
        <div class="p-8">
            <h1 class="text-4xl">Contact Me</h1>
            <p
                class="py-2"
                v-for="paragraph in contact"
                :key="paragraph">
                {{ paragraph }}
            </p>
        </div>
    </MainLayout>
</template>

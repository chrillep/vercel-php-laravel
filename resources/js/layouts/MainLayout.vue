<script setup>
import { Link } from '@inertiajs/vue3';

</script>
<template>
    <div class="flex flex-wrap md:flex-no-wrap w-full max-w-5xl mx-auto" key="main">
        <div class="w-full md:w-1/3 md:border-r-2 border-red-200 md:min-h-screen">
            <div class="sticky top-0 p-8 max-h-screen overflow-y-auto">
                <div class="w-full">
                    <div class="w-16 h-16 bg-red-500 rounded-full" />
                </div>

                <p class="font-bold py-8">John Doe</p>
                <p class="text-gray-600">
                    <!-- Bio -->
                    Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.
                </p>

                <div class="flex flex-wrap my-8">
                <span class="w-full my-2">
                       <Link
                           :href="route('home')"
                           :class="{ 'border-b border-gray-600': $page.url === '/home' }"
                           class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                       >
                           Articles
                       </Link>
                </span>
                    <span class="w-full my-2">
                    <Link
                        :href="route('about')"
                        :class="{ 'border-b border-gray-600': $page.url === '/about' }"
                    >
                        About Me
                    </Link>
                </span>
                    <span class="w-full my-2">
                     <Link
                         :href="route('contact')"
                         :class="{ 'border-b border-gray-600': $page.url === '/contact' }"
                     >
                        Contact Me
                    </Link>
                </span>
                </div>
                <p class="text-gray-500 font-hairline text-sm italic">© All Rights reserved</p>
            </div>
        </div>
        <transition name="page" mode="out-in" appear>
            <div v-if="animate" class="w-full md:w-2/3 overflow-hidden">
                <slot />
            </div>
        </transition>

    </div>
</template>
<script>
export default {
    data(){
        return{
            animate: false,
        };
    },
    mounted(){
        this.animate = true
    },
};
</script>
<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.5s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
}
</style>

<script setup>
import Buttons from '../buttons.vue';
</script>


<template>
	<section class="h-screen flex items-center container relative">
        <div class="wrapper">
            <p class="text-purple-500 text-3xl">{{ apiData.user.name }} {{ apiData.user.lastname }}</p>
            <h1 class="text-8xl text-slate-50 max-w-[550px]">Développeur Full-stack</h1>
            <div class="button_wraapper mt-6 space-x-5">
                <Buttons />
                <a href="#" class="px-5 py-3 rounded border border-slate-50">Télécharger mon CV</a>
            </div>
        </div>
        <img src="../../assets/ouaicgreg.png" alt="" class="absolute right-0 bottom-0 opacity-80 max-w-[800px] -z-10">
    </section>
</template>

<script>
    export default {
        name: 'HeroSection',
        props: {
            apiData: {
            type: Object,
            required: false,
            },
        },
    };
</script>

<script setup>

import Logo from './components/icons/logo.vue';
import Buttons from './components/buttons.vue';

import HeroSection from './components/section/heroSection.vue';
import PresentationSection from './components/section/presentationSection.vue';
import SkillSection from './components/section/SkillSection.vue';

</script>

<template>
	<header class="flex justify-between container py-6 items-center absolute top-0 left-0 right-0">
		<div class="logo relative after:bg-purple-500 after:content-[''] after:absolute after:size-[209px] after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:-z-10">
			<Logo />
		</div>
		<ul class="flex gap-5">
			<li>Qui suis-je ?</li>
			<li>Compétences</li>
			<li>Projets</li>
			<li>Parcours</li>
			<li><Buttons /></li>
		</ul>
	</header>

	<main>
		<HeroSection :apiData="apiData" />
		<PresentationSection :apiData="apiData" />
		<SkillSection :apiData="apiData" />
	</main>
</template>




<script>
import { getData } from './api';

export default {
	name: 'App',
	data() {
		return {
			apiData: null,
		};
	},
	async created() {
		try {
			this.apiData = await getData();
		} catch (error) {
			console.error('Error during API call:', error);
		}
	},
};
</script>
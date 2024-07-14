<template>
    <section class="mt-24 mb-40 container">
        <div class="pres__wrapper flex gap-24 items-center">
            <div class="imgs size-[480px] relative">
                <img src="../../assets/photogreg.png" alt="" class="max-w-[346px] absolute top-0 left-0">
                <img src="../../assets/photgregetroussy.jpg" alt="" class="max-w-[346px] absolute bottom-0 right-0">
            </div>
            <div class="pres flex-1">
                <h2 class="text-5xl text-purple-500 relative -left-[150px] mb-20">Qui suis-je ?</h2>
                <div v-html="apiData.user.presentation" class="pres__wrapper"></div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'PresentationSection',
        props: {
            apiData: {
            type: Object,
            required: false,
            },
        },
    };
</script>
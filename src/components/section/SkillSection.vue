<template>
    <section class="skills my-40 container">
        <h2 class="text-5xl text-purple-500 text-center mb-20">Mes compétences</h2>
        <div v-if="apiData.skill && apiData.skill.length">
            <div class="grid grid-cols-6 gap-14">
                <div v-for="item in apiData.skill" :key="item.id" class="glasso flex items-center justify-center flex-col py-7 rounded gap-2">
                    <img :src="`http://127.0.0.1:8000/images/uploads/${item.icon_url}`" :alt="item.name">
                    <h3 class="text-lg">{{ item.name }}</h3>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'SkillSection',
        props: {
            apiData: {
            type: Object,
            required: false,
            },
        },
    };
</script>
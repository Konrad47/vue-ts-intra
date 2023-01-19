<script setup lang="ts">
import { fetchTutorial } from '@/api/ApiFunctions';
import type { IModel } from '@/models/Model';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const id = ref<number>(parseInt(route.params.id as string))
const tutorial = ref<IModel["tutorial"]>({
    id: 1,
    title: '',
    author: '',
    created_at: ''
});
const getTutorial = async () => {
    const apiTutorial = await fetchTutorial(id.value);
    tutorial.value = apiTutorial
}
getTutorial();
</script>
<template>
    <div class="container">
        <h1>{{ tutorial.title }}</h1>
        <h2>Autor: {{ tutorial.author }}</h2>
        <h2>Data utworzenia: {{ tutorial.created_at }}</h2>
        <button class="btn del" @click="$router.go(-1)">Wróć</button>
    </div>
</template>
<style src="@/main.css">

</style>

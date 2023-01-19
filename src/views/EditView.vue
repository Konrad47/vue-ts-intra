<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { editTutorial, fetchTutorial } from '@/api/ApiFunctions';
import type { IModel } from '@/models/Model';
import { ref } from 'vue';

const route = useRoute();
const router = useRouter();
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

const edit = () => {
    const edtTutorial: IModel["tutorial"] = {
        ...tutorial.value,
        title: tutorial.value.title,
        author: tutorial.value.author,
    }
    editTutorial(tutorial.value.id, edtTutorial)
    router.go(-1)
}

</script>
<template>
    <div class="container">
        <h1>Edytuj: {{ id }}</h1>
        <form>
            <label for="fname">Tytuł</label><br>
            <input v-model="tutorial.title" type="text" id="fname" name="fname"><br>
            <label for="lname">Autor</label><br>
            <input v-model="tutorial.author" type="text" id="lname" name="lname">
        </form>
        <button @click="$router.go(-1)" class="btn del">Anuluj</button>
        <button @click="edit" class="btn edt">Edytuj</button>
    </div>
</template>
<style src="@/main.css">

</style>
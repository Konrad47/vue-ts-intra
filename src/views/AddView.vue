<script setup lang="ts">
import { addTutorial } from '@/api/ApiFunctions';
import type { IModel } from '@/models/Model';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const title = ref("");
const author = ref("");

const add = () => {
    const currentDate = new Date().toJSON().slice(0, 10);
    const currentHour = new Date().toLocaleTimeString();

    const tutorial: IModel["tutorial"] = {
        id: Math.floor(Math.random() * 100 + 1),
        title: title.value,
        author: author.value,
        created_at: currentDate + " " + currentHour
    }
    addTutorial(tutorial);
    router.go(-1)
}
</script>
<template>
    <div class="container">
        <h1>Dodaj poradnik</h1>
        <form>
            <label for="fname">Tytuł</label><br>
            <input v-model="title" type="text" id="fname" name="fname"><br>
            <label for="lname">Autor</label><br>
            <input v-model="author" type="text" id="lname" name="lname">
        </form>
        <button @click="$router.go(-1)" class="btn del">Anuluj</button>
        <button @click="add" class="btn edt">Dodaj</button>
    </div>
</template>
<style src="@/main.css">

</style>
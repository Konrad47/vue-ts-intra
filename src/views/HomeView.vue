<script setup lang="ts">
import { deleteTutorial, fetchTutorials } from '@/api/ApiFunctions';
import type { IModel } from '@/models/Model';
import { ref, onMounted, onUpdated, computed } from 'vue'
import Table from '@/components/Table.vue';
import Button from '@/components/Button.vue';

const searchId = ref("")
const searchTitle = ref("")
const searchAuthor = ref("")
const searchDate = ref("")
const tutorials = ref<IModel["tutorials"]>([])

let filterTutorials = computed<IModel["tutorials"]>(() => {
  return tutorials.value.filter((tutorial) => {
    if (searchId.value !== "" || searchTitle.value !== "" || searchAuthor.value !== "" || searchDate.value !== "") {
      return (
        tutorial.id.toString().includes(searchId.value) &&
        tutorial.title.toLowerCase().includes(searchTitle.value) &&
        tutorial.author.toLowerCase().includes(searchAuthor.value) &&
        tutorial.created_at.toLowerCase().includes(searchDate.value)
      )
    } else {
      return tutorials.value
    }
  })
})

const getTutorials = async () => {
  const apiTutorials = await fetchTutorials();
  tutorials.value = apiTutorials
}
getTutorials();

onMounted(() => {
  getTutorials();

})
onUpdated(() => {
  // console.log(filterTutorials.value)
})
const onDelete = (id: number) => {
  deleteTutorial(id)
  tutorials.value = tutorials.value.filter((tut) => tut.id !== id);
}

const sortUpById = () => {
  tutorials.value.sort((a, b) => {
    return a.id - b.id;
  })
}
const sortDownById = () => {
  tutorials.value.sort((a, b) => {
    return b.id - a.id;
  })
}

const sortUpByTitle = () => {
  tutorials.value.sort((a, b) => {
    return a.title.localeCompare(b.title)
  })
}
const sortDownByTitle = () => {
  tutorials.value.sort((a, b) => {
    return b.title.localeCompare(a.title)
  })
}

const sortUpByAuthor = () => {
  tutorials.value.sort((a, b) => {
    return a.author.localeCompare(b.author)
  })
}
const sortDownByAuthor = () => {
  tutorials.value.sort((a, b) => {
    return b.author.localeCompare(a.author)
  })
}

const sortUpByDate = () => {
  tutorials.value.sort((a, b) => {
    return a.created_at.localeCompare(b.created_at)
  })
}
const sortDownByDate = () => {
  tutorials.value.sort((a, b) => {
    return b.created_at.localeCompare(a.created_at)
  })
}

const showSquare = () => {
  const square = document.getElementById('square');
  const math = Math.ceil(Math.random() * 100);
  if (math === 50) {
    (square as HTMLAnchorElement).style.display = 'inline';
    setTimeout(() => {
      (square as HTMLAnchorElement).style.display = 'none';
    }, 100)
  }
}
</script>

<template>
  <div @click="showSquare" class="container">
    <h1>Home</h1>
    <Button text="Dodaj" className="edt" routeName="add" />
    <Table :items="filterTutorials" name="details" name2="edit" :onDelete="onDelete" :sortUpById="sortUpById"
      :sortDownById="sortDownById" :sortUpByDate="sortUpByDate" :sortDownByDate="sortDownByDate"
      :sortUpByTitle="sortUpByTitle" :sortDownByTitle="sortDownByTitle" :sortUpByAuthor="sortUpByAuthor"
      :sortDownByAuthor="sortDownByAuthor" v-model:searchId="searchId" v-model:searchTitle="searchTitle"
      v-model:searchAuthor="searchAuthor" v-model:searchDate="searchDate" />
    <div class="square" id="square"></div>
  </div>
</template>
<style src="@/main.css">

</style>

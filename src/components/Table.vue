<script setup lang="ts">
import type { IModel as Props } from '@/models/Model';
import { onUpdated } from 'vue';
import Button from './Button.vue';
interface IModel {
        items: Props["tutorials"],
        name: string,
        name2: string,
        searchId: string,
        searchTitle: string,
        searchAuthor: string,
        searchDate: string,
        onDelete(id: number): void,
        sortUpById(items: Props["tutorials"]): void,
        sortDownById(items: Props["tutorials"]): void,
        sortUpByTitle(items: Props["tutorials"]): void,
        sortDownByTitle(items: Props["tutorials"]): void,
        sortUpByAuthor(items: Props["tutorials"]): void,
        sortDownByAuthor(items: Props["tutorials"]): void,
        sortUpByDate(items: Props["tutorials"]): void,
        sortDownByDate(items: Props["tutorials"]): void,
}
defineProps<IModel>()
defineEmits(['update:searchId', 'update:searchTitle', 'update:searchAuthor', 'update:searchDate'])

</script>
<template>
        <table>
                <tr>
                        <th>Id <span @click="sortUpById(items)" class="arr-up">↑</span><span
                                        @click="sortDownById(items)" class="arr-down">↓</span></th>
                        <th>Tytuł <span @click="sortUpByTitle(items)" class="arr-up">↑</span><span
                                        @click="sortDownByTitle(items)" class="arr-down">↓</span></th>
                        <th>Autor <span @click="sortUpByAuthor(items)" class="arr-up">↑</span><span
                                        @click="sortDownByAuthor(items)" class="arr-down">↓</span></th>
                        <th>Data utworzenia <span @click="sortUpByDate(items)" class="arr-up">↑</span><span
                                        @click="sortDownByDate(items)" class="arr-down">↓</span></th>
                        <th></th>
                </tr>
                <tr>
                        <th><input :value="searchId"
                                        @input="$emit('update:searchId', ($event.target as HTMLInputElement).value)"
                                        class="input-id" type="text"></th>
                        <th><input :value="searchTitle"
                                        @input="$emit('update:searchTitle', ($event.target as HTMLInputElement).value)"
                                        type="text"></th>
                        <th><input :value="searchAuthor"
                                        @input="$emit('update:searchAuthor', ($event.target as HTMLInputElement).value)"
                                        type="text"></th>
                        <th><input :value="searchDate"
                                        @input="$emit('update:searchDate', ($event.target as HTMLInputElement).value)"
                                        type="text"></th>
                        <th></th>
                </tr>
                <tr v-for="(item, i) in items" :key="i">
                        <td>{{ item.id }}</td>
                        <td>{{ item.title }}</td>
                        <td>{{ item.author }}</td>
                        <td>{{ item.created_at }}</td>
                        <td>
                                <Button text="Det" className="det" :routeName="name" :routeId="item.id" />
                                <Button text="Edt" className="edt" :routeName="name2" :routeId="item.id" />
                                <button @click="onDelete(item.id)" class="btn del">Del</button>
                        </td>
                </tr>
        </table>
</template>
<style src="@/main.css">

</style>

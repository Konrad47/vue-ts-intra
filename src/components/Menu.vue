<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
    title: string,
    title2: string
}>()
</script>

<template>
    <div class="menu">
        <RouterLink to="/">{{ title }}</RouterLink>
        <RouterLink to="/about">{{ title2 }}</RouterLink>
    </div>
    <div class="horizontal-menu"></div>
</template>

<style src="@/main.css">

</style>
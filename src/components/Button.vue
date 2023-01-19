<script setup lang="ts">
defineProps<{
    text: string,
    className: string,
    routeName: string,
    routeId?: number
}>()
</script>
<template>
    <button v-if="routeId" :class="`btn ${className}`"
        @click="$router.push({ name: `${routeName}`, params: { id: routeId } })">{{
            text
        }}</button>
    <button v-else :class="`btn ${className}`" @click="$router.push({ name: `${routeName}` })">{{
        text
    }}</button>
</template>
<style src="@/main.css">

</style>
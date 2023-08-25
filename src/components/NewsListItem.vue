<script setup lang="ts">
import type { News } from '@/types';

interface Props {
    newsItem: News,
};

defineProps<Props>();
</script>

<template>
<li>
    <div>{{ newsItem.date }}</div>
    <h2>{{ newsItem.name }}</h2>
    <div>{{ newsItem.type.value }}</div>
</li>
</template>

<style scoped>
</style>

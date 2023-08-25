<script setup lang="ts">
import type { News } from '@/types';
import NewsListItem from '@/components/NewsListItem.vue';

interface Props {
    newsList: Array<News>, 
    currentPage: number, 
    totalPages: number,
    nextPage: () => void,
};

defineProps<Props>();
</script>

<template>
<div>
    <ul v-for="newsItem of newsList" :key="newsItem.code">
        <NewsListItem :newsItem="newsItem" />
    </ul>
    <button v-if="currentPage !== totalPages" @click="nextPage">Загрузить ещё</button>
</div>
</template>

<style scoped>
</style>

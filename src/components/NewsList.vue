<script setup lang="ts">
import NewsListItem from '@/components/NewsListItem.vue';
import BaseLoader from '@/components/BaseLoader.vue';
import type { News } from '@/types';

interface Props {
    newsList: Array<News>, 
    currentPage: number, 
    totalPages: number,
    nextPage: () => void,
    isLoading: boolean,
};

defineProps<Props>();
</script>

<template>
<div>
    <ul class="list">
        <NewsListItem v-for="newsItem of newsList" :key="newsItem.code" :newsItem="newsItem" />
    </ul>
    <BaseLoader v-if="isLoading" />
    <button class="btn" v-else-if="currentPage !== totalPages" @click="nextPage">Загрузить ещё</button>
</div>
</template>

<style scoped>
.list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 24px;
    margin-bottom: 20px;
}

@media (max-width: 320px) {
    .list {
        margin-bottom: 25px;
    }
}

.btn {
    padding: 15px 34px;
    background: linear-gradient(192deg, #3BCDFB 0%, #D728F4 100%), #C4C4C4;
    color: #ffffff;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 1;
}

@media (max-width: 320px) {
    .btn {
        width: 100%;
    }
}
</style>

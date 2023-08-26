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
    <ul class="list">
        <NewsListItem v-for="newsItem of newsList" :key="newsItem.code" :newsItem="newsItem" />
    </ul>
    <button class="btn" v-if="currentPage !== totalPages" @click="nextPage">Загрузить ещё</button>
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

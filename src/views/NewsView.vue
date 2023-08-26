<script setup lang="ts">
import { ref, type Ref, watchEffect } from 'vue';
import NewsList from '@/components/NewsList.vue';
import { type News } from '@/types';

interface FetchResult {
    items: Array<News>,
    nav: {
        current: number,
        total: number,
    },
};

const newsList: Ref<News[]> = ref([]);
const currentPage: Ref<number> = ref(1);
const totalPages: Ref<number> = ref(0);
const isLoading: Ref<boolean> = ref(false);

const fetchNewsList = async () => {
    isLoading.value = true;
    try {
        const response: Response = await fetch(`https://flems.github.io/test/api/news/${currentPage.value}`);
        if (response.ok) {
            const fetchResult: FetchResult = await response.json();
            newsList.value.push(...fetchResult.items);
            totalPages.value = fetchResult.nav.total;
        } else {
            throw `Ошибка при запросе`
        }
    } catch (error) {
        console.log(error);
    } finally {
        isLoading.value = false;
    }
};

watchEffect(async () => {
    await fetchNewsList();
});

const nextPage = (): void => {
    currentPage.value++;
};
</script>

<template>
<NewsList 
    :newsList="newsList" 
    :currentPage="currentPage" 
    :totalPages="totalPages" 
    :nextPage="nextPage" 
    :isLoading="isLoading" 
/>
</template>

<style scoped>
</style>

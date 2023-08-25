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

const fetchNewsList = async () => {
    try {
        const response: Response = await fetch(`https://flems.github.io/test/api/news/${currentPage.value}`);
        if (response.ok) {
            const fetchResult: FetchResult = await response.json();
            newsList.value.push(...fetchResult.items);
            totalPages.value = fetchResult.nav.total;
            console.log(newsList.value)
        } else {
            throw `Ошибка при запросе`
        }
    } catch (error) {
        console.log(error);
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
<NewsList :newsList="newsList" :currentPage="currentPage" :totalPages="totalPages" :nextPage="nextPage" />
</template>

<style scoped>
</style>

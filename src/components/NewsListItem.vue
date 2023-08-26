<script setup lang="ts">
import type { News } from '@/types';
import { computed, type ComputedRef } from 'vue';

interface Props {
    newsItem: News,
};

const props = defineProps<Props>();

const addZeroToBeginingOfNumber = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`
};

const getDate = (dateInSeconds: number): string => {
    const date: Date = new Date(dateInSeconds * 1000);
    const utcYear: number = date.getUTCFullYear();
    const utcMonth: number = date.getUTCMonth() + 1;
    const utcDayNumber: number = date.getUTCDate();

    return `${addZeroToBeginingOfNumber(utcDayNumber)}.${addZeroToBeginingOfNumber(utcMonth)}.${utcYear}`
};

const imageUrl: ComputedRef<string> = computed(() => {
    return `url(${props.newsItem.image})`
});
</script>

<template>
<li class="listItem">
    <RouterLink class="link" to="#">
        <div class="date">{{ getDate(newsItem.date) }}</div>
        <h2 class="title">{{ newsItem.name }}</h2>
        <div class="category">{{ newsItem.type.value }}</div>
    </RouterLink>
</li>
</template>

<style scoped>
.listItem {
    width: 100%;
    max-width: 412px;
    padding: 24px;
    background-color: #f8f8f8;
}

.listItem:first-child {
    width: 100%;
    max-width: 848px;
    background: linear-gradient(360deg, #414141 0%, rgba(59, 205, 251, 0.00) 100%), v-bind(imageUrl), lightgray 50% / cover no-repeat;
    backdrop-filter: blur(50px);
}

@media (max-width: 1440px) {
    .listItem {
        max-width: calc(50% - 12px);
    }

    .listItem:first-child {
        max-width: 100%;
    }
}

@media (max-width: 960px) {
    .listItem {
        max-width: 100%;
    }
}

@media (max-width: 320px) {
    .listItem {
        padding: 0 0 20px;
        background-color: #ffffff;
        border-bottom: 1px solid #d9d9d6;
    }

    .listItem:first-child {
        background: none;
        backdrop-filter: none;
    }
}

.link {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.listItem:first-child .link {
    justify-content: flex-end;
}

.date {
    display: inline-block;
    margin-bottom: 30px;
    padding: 6px 8px;
    background-color: #97999b;
    border-radius: 2px;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 1;
    color: #ffffff;
}

.listItem:first-child .date {
    background-color: rgba(151, 153, 155, 0.50);
}

@media (max-width: 320px) {
    .date {
        margin-bottom: 4px;
        font-size: 10px;
    }

    .listItem:first-child .date {
        background-color: #97999b;
    }
}

.title {
    flex-grow: 1;
    margin-bottom: 49px;
    color: #000000;
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.listItem:first-child .title {
    order: 1;
    flex-grow: 0;
    margin-bottom: 0;
    color: #ffffff;
    font-size: 32px;
    line-height: 128.906%;
    text-transform: uppercase;
}

.listItem:hover .title {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

@media (max-width: 320px) {
    .title {
        margin-bottom: 15px;
        font-size: 16px;
        line-height: 20px;
    }
}

@media (max-width: 320px) {
    .listItem:first-child .title {
        order: 0;
        margin-bottom: 15px;
        color: #000000;
        font-size: 16px;
        line-height: 20px;
        text-transform: none;
    }
}

.category {
    display: inline-block;
    padding: 4px 6px;
    border-radius: 2px;
    border: 1px solid #d9d9d6;
    color: #97999B;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 1;
}

.listItem:first-child .category {
    margin-top: auto;
    margin-bottom: 10px;
    border: 1px solid #ffffff;
    color: #ffffff;
}

@media (max-width: 320px) {
    .listItem:first-child .category {
        margin: 0;
        border: 1px solid #d9d9d6;
        color: #97999B;
    }
}
</style>

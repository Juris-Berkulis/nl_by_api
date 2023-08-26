<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
</script>

<template>
<TheHeader />
<main class="main">
    <RouterView />
</main>
<TheFooter />
</template>

<style scoped>
.main {
    max-width: 1440px;
    margin: 0 auto;
    padding: 64px 78px 104px;
}

@media (max-width: 600px) {
    .main {
        padding: 32px 16px 94px;
    }
}
</style>

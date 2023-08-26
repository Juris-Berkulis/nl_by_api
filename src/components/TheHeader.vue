<script setup lang="ts">
</script>

<template>
<div class="header">
    <div class="breadCrumbs">
        <span class="linkWrapper">
            <RouterLink class="link" to="#">Главная</RouterLink>
        </span>
        <span class="linkWrapper">
            <RouterLink class="link" to="#">Новости и медиа</RouterLink>
        </span>
        <span class="linkWrapper">
            <RouterLink class="link" to="#">Пресс-релизы и новости</RouterLink>
        </span>
    </div>
    <h1 class="title">Пресс-релизы и новости</h1>
</div>
</template>

<style scoped>
.header {
    width: 100%;
    height: 324px;
    background: #231F20;
    padding: 40px max(calc((100% - 1440px) / 2 + 78px), 78px);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

@media (max-width: 600px) {
    .header {
        height: 208px;
        padding: 34px 16px;
    }
}

.breadCrumbs {
    color: rgba(255, 255, 255, 0.70);
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
}

@media (max-width: 600px) {
    .breadCrumbs {
        display: none;
    }
}

.linkWrapper::after {
    content: '-';
    margin: 0 9px;
}

.linkWrapper:last-child::after {
    display: none;
}

.link {
    color: inherit;
}

.link:hover {
    text-decoration: underline;
}

.title {
    margin-top: 25px;
    color: #ffffff;
    font-family: Roboto;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
}

@media (max-width: 600px) {
    .title {
        font-size: 24px;
        line-height: 128.906%;
    }
}
</style>

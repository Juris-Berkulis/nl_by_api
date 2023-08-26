<script setup lang="ts">
</script>

<template>
<div class="loaderWrapper">
    <div class="loader"></div>
</div>
</template>

<style scoped>
.loaderWrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

@keyframes loader {
    from {
        transform: rotateZ(0deg);
    }

    to {
        transform: rotateZ(360deg);
    }
}

.loader {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 10px solid #231F20;
    border-right-color: transparent;
    animation: loader 2s linear 0s infinite normal;
}
</style>

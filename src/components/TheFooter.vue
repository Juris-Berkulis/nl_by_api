<script setup lang="ts">
import IconFacebook from '@/components/IconFacebook.vue';
import IconLinkedin from '@/components/IconLinkedin.vue';
import IconTwitter from '@/components/IconTwitter.vue';
</script>

<template>
<div class="footer">
    <div class="linksWrapper">
        <RouterLink class="link" to="#">Карта сайта</RouterLink>
        <RouterLink class="link" to="#">Условия использования</RouterLink>
        <RouterLink class="link" to="#">Контакты</RouterLink>
        <RouterLink class="link" to="#">Горячая линия</RouterLink>
        <RouterLink class="link" to="#">Антикоррупционная политика</RouterLink>
    </div>
    <div class="additionaly">
        <div class="socialNetworks">
            <RouterLink class="socialNetworkLink" to="#">
                <IconTwitter />
            </RouterLink>
            <RouterLink class="socialNetworkLink" to="#">
                <IconFacebook />
            </RouterLink>
            <RouterLink class="socialNetworkLink" to="#">
                <IconLinkedin />
            </RouterLink>
        </div>
        <p class="rights">© 2019 ООО Зебра Тест</p>
    </div>
</div>
</template>

<style scoped>
.footer {
    width: 100%;
    background: #f8f8f8;
    padding: 40px max(calc((100% - 1440px) / 2 + 78px), 78px);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

@media (max-width: 600px) {
    .footer {
        padding: 16px;
    }
}

@media (max-width: 1440px) {
    .linksWrapper {
        display: none;
    }
}

.link {
    margin-right: 40px;
    color: #97999b;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
}

.link:last-child {
    margin-right: 0;
}

.link:hover {
    color: #6a6b6d;
}

.additionaly {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

@media (max-width: 1440px) {
    .additionaly {
        width: 100%;
    }
}

.socialNetworks {
    display: inline-block;
    margin-right: 36px;
}

@media (max-width: 1440px) {
    .socialNetworks {
        margin-right: auto;
    }  
}

.socialNetworkLink {
    margin: 0 17px;
    color: #97999b;
}

.socialNetworkLink:first-child, 
.socialNetworkLink:last-child {
    margin: 0;
}

.socialNetworkLink:hover {
    color: #6a6b6d;
}

.rights {
    display: inline-block;
    color: #97999B;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
}

@media (max-width: 600px) {
    .rights {
        font-size: 11px;
    }
}
</style>

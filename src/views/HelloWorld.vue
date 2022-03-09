<script setup lang="ts">
import { ref } from 'vue';
// import { mapJson } from '/@/api/mock';
// import { ref, getCurrentInstance } from 'vue';

const count = ref(0);
// mapJson()
//     .then((res: any) => {
//         console.log(res, 'asa');
//     })
//     .catch((err) => {
//         console.log('err:', err);
//     });
// const instance = getCurrentInstance();
// const { Title } = instance.appContext.config.globalProperties.$config;
// console.log(Title, 'asasa');
</script>

<template>
    <h1>{{ $t('home') }}</h1>
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-button>中文</el-button>
    <IconSvg iconClass="user" hover="user-s"></IconSvg>
    <p>
        Recommended IDE setup:
        <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
        +
        <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    </p>

    <p>See1 <code>README.md</code> for more information.</p>

    <p>
        <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Docs </a>
        |
        <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
    </p>

    <button type="button" @click="count++">count is: {{ count }}</button>
    <p>
        Edit
        <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
</template>

<style scoped lang="scss">
a {
    color: #42b983;

    &:hover {
        color: red;
    }
}

label {
    position: relative;
    margin: 0 0.5em;
    font-weight: bold;
}

code {
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
    background-color: #eeeeee;
}
</style>

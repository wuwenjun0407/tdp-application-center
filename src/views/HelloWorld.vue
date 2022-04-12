<script setup lang="ts">
import { ref, reactive, watch, nextTick, computed, InjectionKey, onMounted, unref, toRef, provide } from 'vue';
// import { storeToRefs } from 'pinia';
// import { login } from '/@/api/user';
import Child from '/@/views/Child.vue';
import { useSettingStore } from '/@/store/modules/settings';

const Store = useSettingStore();
// const { title } = storeToRefs(Store);
nextTick(() => {
    Store.$patch((state) => {
        console.log('9090');
        state.title = 'new title';
    });
});
Store.$subscribe((mutation, state) => {
    console.log(mutation, state, '12121', state.title);
});
type setUser = (name: string, age: number) => void;

let user: setUser = function (name, age) {
    console.log(name, age);
};
user('1', 2);
await nextTick();
const count = ref(0);
const count1 = 1;
const key: InjectionKey<number> = Symbol();
provide(key, unref(count));
console.log(unref(count1));
const obj = reactive({ count });
const as = toRef(obj, 'count');
console.log(as.value, 'asasasa');
as.value++;
console.log(as.value, 'asasasa', obj.count);
const repositories = ref<Array<number>>([]);
const newTitle = computed(() => {
    return repositories.value;
});
console.log(obj.count, '1212', newTitle.value);
repositories.value = [1, 2, 3];
watch(count, (newVal: number, oldVal: number) => {
    console.log(newVal, oldVal);
});

function getName() {
    repositories.value.push(4);
    Store.CHANGE_TITLE('232323');
    // console.log(count.value++);
}

const child = ref(null);
onMounted(() => {
    setTimeout(() => {
        console.log(child.value.original.count, 'btn');
    });
});
onMounted(getName);
// const DIV: Element = document.getElementsByClassName('interface')[0];
// type a = typeof DIV;
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
// login();
</script>

<template>
    <!-- {{ newTitle }}
    {{ title }} -->
    <Child ref="child" :data="repositories"></Child>
    <!-- <h1 @click="getName" class="home">{{ $t('home') }}</h1> -->
    <el-button style="font-size: 14px">Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-button>中文</el-button>
    <IconSvg iconClass="user" hover="user-s"></IconSvg>
    <ul>
        <li v-for="(item, index) in repositories" :key="index">{{ item }}</li>
    </ul>
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

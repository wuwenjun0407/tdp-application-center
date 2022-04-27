<!--
 *  ┌─────────────────────────────────────────────────────────────┐
 *  │┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┐│
 *  ││Esc│!1 │@2 │#3 │$4 │%5 │^6 │&7 │*8 │(9 │)0 │_- │+= │|\ │`~ ││
 *  │├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴───┤│
 *  ││ Tab │ Q │ W │ E │ R │ T │ Y │ U │ I │ O │ P │{[ │}] │ BS  ││
 *  │├─────┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴─────┤│
 *  ││ Ctrl │ A │ S │ D │ F │ G │ H │ J │ K │ L │: ;│" '│ Enter  ││
 *  │├──────┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴────┬───┤│
 *  ││ Shift  │ Z │ X │ C │ V │ B │ N │ M │< ,│> .│? /│Shift │Fn ││
 *  │└─────┬──┴┬──┴──┬┴───┴───┴───┴───┴───┴──┬┴───┴┬──┴┬─────┴───┘│
 *  │      │Fn │ Alt │         Space         │ Alt │Win│   HHKB   │
 *  │      └───┴─────┴───────────────────────┴─────┴───┘          │
 *  └─────────────────────────────────────────────────────────────┘
 *
 * @Author: wuwj8
 * @Date: 2022-03-10 15:59:53
 * @LastEditors: your name
 * @LastEditTime: 2022-04-27 11:41:34
 * @FilePath: \tdp-application-center\src\views\Child.vue
 * @Description:
 -->

<script setup lang="ts">
// import { ref, isReactive, onMounted, reactive, readonly, inject, getCurrentInstance } from 'vue';
// import { useSettingStore } from '/@/store/modules/settings';
// import { storeToRefs } from 'pinia';

// const Store = useSettingStore();
// const { title } = storeToRefs(Store);
// const original = reactive({ count: 0 });
// const a = ref(1);
// console.log(isReactive(original));
// const key = inject('key');
// console.log(key, 'key');
// let b = readonly(original);
// console.log(b, a.value, key);
// // b.count++;
// // const song = () => alert('hello world');
// const instance = getCurrentInstance();
// console.log(instance.appContext, 'ctx');
// const props = defineProps({
//     data: {
//         type: Array,
//         default: () => []
//     }
// });
// onMounted(() => {});
// defineExpose({
//     original
// });
function childClick() {
    console.log('111');
    // Store.$patch((state) => {
    //     state.title = 'new title';
    // });
    // Store.$patch({ title: '111' });
}
</script>

<template>
    <h2 @click="childClick">Child</h2>
    <!-- {{ title }} -->
    <!-- <div v-for="(item, index) in props.data" :key="index">{{ item }}</div> -->
</template>

<style scoped></style>

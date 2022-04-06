<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps({
    iconClass: {
        type: String,
        default: ''
    },
    className: {
        type: String,
        default: 'cursor'
    },
    size: {
        type: String,
        default: '24'
    },
    hover: {
        type: String,
        default: ''
    }
});

const iconClassName = ref(props.iconClass);
const iconOldClassName = ref('');
const symbolId = computed(() => `#icon-${iconClassName.value}`);
const svgClass = computed(() => `svg-icon ${props.className}`);

function mouseenter() {
    if (props.hover) {
        iconOldClassName.value = iconClassName.value;
        iconClassName.value = `${props.hover}`;
    }
}

function mouseleave() {
    if (props.hover) {
        iconClassName.value = `${iconOldClassName.value}`;
    }
}
</script>

<template>
    <svg :class="svgClass" @mouseenter="mouseenter" @mouseleave="mouseleave" aria-hidden="true" title mode="open" :style="{ width: size, height: size }">
        <use title :xlink:href="symbolId" />
        <title></title>
    </svg>
</template>

<style lang="scss" scoped>
.svg-icon {
    width: 1em;
    height: 1em;
    overflow: hidden;
    vertical-align: -0.15em;
    fill: currentColor;
}
</style>

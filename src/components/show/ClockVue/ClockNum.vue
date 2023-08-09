<script setup>
import NumOnce from './NumOnce.vue'

// 接受一位数字 转化成显示逻辑 听说有人想用数字逻辑做 可是卡诺图忘光了
const props = defineProps(["value"])
const zeroAdd = [
    [1, 1, 1, 0, 1, 1, 1],
    [0, 0, 1, 0, 0, 0, 1],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 0, 1, 1],
    [1, 0, 1, 1, 0, 0, 1],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1],
    [0, 1, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 1],
    // [1, 0, 1, 1, 1, 1, 0]
]
</script>

<template>
    <div class="num-container">
        <div class="num">
            <NumOnce v-for="(item, index) in zeroAdd[Math.floor(props.value / 10)]" v-show="item" :key="index"></NumOnce>
        </div>
        <div class="num">
            <NumOnce v-for="(item, index) in zeroAdd[props.value % 10]" v-show="item" :key="index"></NumOnce>
        </div>
    </div>
</template>

<style scoped lang="less">
.num-container {
    display: flex;

    .num {
        position: relative;
        width: 6rem;
        height: 12rem;
        margin: 1rem;
    }

    svg {
        position: absolute;
        width: 6rem;
        transform: scale(var(--scale));
    }

    svg:nth-child(2n - 1) {
        transform: rotate(90deg) scale(var(--scale));
    }

    svg:nth-child(1) {
        top: 3rem;
        left: -3rem;
    }

    svg:nth-child(2) {
        top: 0;
        left: 0;
    }

    svg:nth-child(3) {
        top: 3rem;
        left: 3rem;
    }

    svg:nth-child(4) {
        top: 6rem;
        left: 0;
    }

    svg:nth-child(5) {
        top: 9rem;
        left: -3rem;
    }

    svg:nth-child(6) {
        top: 12rem;
        left: 0rem;
    }

    svg:nth-child(7) {
        top: 9rem;
        left: 3rem;
    }
}
</style>
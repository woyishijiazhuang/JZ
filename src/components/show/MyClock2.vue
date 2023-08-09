<!-- 重复的循环背景的动画究竟怎么做呢？ -->
<script setup>
import { ref, onBeforeUnmount } from 'vue'
const time = ref([0, 0, ':', 0, 0, ':', 0, 0])
// 创建hh-mm-ss

let interval = setInterval(() => {
    time.value = new Date().toString().match(/[0-9][0-9][:][0-9][0-9][:][0-9][0-9]/)[0].split('')
},1000)

onBeforeUnmount(() => clearInterval(interval))
</script>

<template>
    <div class="my-clock2-container" title="做这个的时候一直在考虑怎么做到往一个方向循环的渐变动态背景，实在是难办">
        <span v-for="item,i in time" :key="i">{{ item }}</span>
    </div>
</template>

<style>
.my-clock2-container {
    aspect-ratio: 16 / 9;
    user-select: none;
    display: flex;
    align-items: center;
    font-size: 14rem;
    color: transparent;
    background: linear-gradient(145deg, #ff6d6d, #6969f9, #98f498, #f4f484, #ff6d6d, #6969f9);
    background-size: 800%;
    background-clip: text;
    -webkit-background-clip: text;
    /* background-position: 100% 100%; */
    animation: my-clock2-bg-move 8s linear infinite;
}
.my-clock2-container > span {
    width: .6em;
}
.my-clock2-container > span:nth-child(3),
.my-clock2-container > span:nth-child(6) {
    width: 0.3em;
}

@keyframes my-clock2-bg-move {
    0% {
        background-position: 0% 0%;
    }

    100% {
        background-position: 100% 100%;
    }
}
</style>
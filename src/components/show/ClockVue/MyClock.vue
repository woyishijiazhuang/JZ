<!-- 用特殊的字体文件会大大减少代码量 这里主要锻炼一下数据绑定 -->
<script setup>
import { ref, onBeforeUnmount } from 'vue'
import ClockNum from './ClockNum.vue';
import NumDot from './NumDot.vue';
// 创建hh-mm-ss
const time = ref([0, 0, 0])
const color = ref('rgb(64, 163, 158)')
let interval = setInterval(() => {
    const d = new Date()
    time.value = [d.getHours(),  d.getMinutes(), d.getSeconds()]
},1000)

onBeforeUnmount(() => {
    clearInterval(interval)
})
const thisTitle = `使用svg配合响应式数据和v-show展示每个数字的每个独立部分`
</script>

<template>
    <div class="my-clock-container" :style="{'--color':color}" :title="thisTitle">
        <ClockNum :value="time[0]"></ClockNum>
        <NumDot></NumDot>
        <ClockNum :value="time[1]"></ClockNum>
        <NumDot></NumDot>
        <ClockNum :value="time[2]"></ClockNum>
        <el-color-picker v-model="color"></el-color-picker>
    </div>
</template>

<style>
.my-clock-container {
    display: flex;
    justify-content: space-around;
    --scale: 0.95;
}
</style>
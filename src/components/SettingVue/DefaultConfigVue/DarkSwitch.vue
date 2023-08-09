<script setup>
import { useDark } from '@vueuse/core'
import Sunny from '@/icon/Sunny.vue'
import Moon from '@/icon/Moon.vue'
const dark = useDark()
</script>

<template>
    <el-switch v-model="dark" inline-prompt :inactive-icon="Sunny" :active-icon="Moon" />
    <!-- <label class="dark-switch">
        <input type="checkbox" style="display: none;" />
        <span></span>
    </label>
     -->
</template>
<style scoped lang="less">
// .dark-switch {
//     position: relative;
//     height: 1em;
//     min-width: 2em;
//     border-radius: 1em;
    
//     border: 2px solid var(--el-color-primary-light-3);
//     background-color: var(--el-color-primary-light-5);
//     transition: all 0.35s ease-in;
//     cursor: pointer;

//     &>span {
//         display: block;
//         box-sizing: border-box;
//         width: 1em;
//         height: 1em;
//         border-radius: 1em;
//         border: 2px solid #f5eb71;
//         background-color: #fffaa8;
//         transition: all 0.25s ease;
//     }
//     &::after {

//     }
// }
// .dark-switch:has(input:checked) {
//     border-color: #5d6baa;
// 	background-color: #6b7abb;
//     &>input:checked~span{
//         border-color: #e8e8ea;
//         background-color: #fff;
//         transform: translateX(100%);
//     }
// }
</style>
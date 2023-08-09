<script setup>
import { ref, watch } from 'vue'
import SettingItem from './SettingItem.vue'

const fullScreen = ref(!!document.fullscreenElement)
watch(fullScreen,(newFullScreen) => {
    if (newFullScreen && !document.fullscreenElement) {
        document.documentElement.requestFullscreen()
    } else if(!newFullScreen && document.fullscreenElement){
        document.exitFullscreen()
    }
})
document.addEventListener('fullscreenchange',() => {
    fullScreen.value = !!document.fullscreenElement
})
</script>

<template>
    <SettingItem>
        <template #title>
            全屏模式
        </template>
        <template #default>
            无法处理通过<el-tag type="info" style="margin: 0 .4em;">F11</el-tag>进行的全屏切换
        </template>
        <template #setting>
            <el-switch v-model="fullScreen">全屏切换</el-switch>
        </template>
    </SettingItem>
</template>


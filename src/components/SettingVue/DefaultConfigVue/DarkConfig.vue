<script setup>
import SettingItem from './SettingItem.vue'
import DarkSwitch from './DarkSwitch.vue'
</script>

<template>
    <SettingItem>
        <template #title>
            暗色模式
        </template>
        <template #default>
            更改显示主题，配置持久存储在本地
        </template>
        <template #setting>
            <DarkSwitch/>
        </template>
    </SettingItem>
</template>

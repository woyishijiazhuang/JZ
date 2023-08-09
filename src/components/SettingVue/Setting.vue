<script setup>
import { ref } from 'vue'
import DefaultConfig from './DefaultConfigVue/DefaultConfig.vue'
import RoutesConfig from './RoutesConfig.vue'
const settingPage = ref('普通配置')
</script>

<template>
    <el-card shadow="hover" class="setting-container">
        <template #header>
            <div class="setting-header">
                <span>设置页面</span>
                <el-radio-group v-model="settingPage">
                    <el-radio-button label="普通配置" />
                    <el-radio-button label="路由配置" />
                    <el-radio-button label="其他配置" />
                </el-radio-group>
            </div>
        </template>
        <DefaultConfig v-show="settingPage == '普通配置'"></DefaultConfig>
        <RoutesConfig v-show="settingPage == '路由配置'"></RoutesConfig>
    </el-card>
</template>

<style scoped lang="less">
.setting-container {
    width: 100%;
    min-height: 100%;
    box-sizing: border-box;
    overflow-y: auto;
    .setting-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
</style>
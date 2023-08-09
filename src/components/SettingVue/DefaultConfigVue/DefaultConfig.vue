<script setup>
import { } from 'vue'
import SettingItem from '@/components/SettingVue/DefaultConfigVue/SettingItem.vue'
import DarkConfig from '@/components/SettingVue/DefaultConfigVue/DarkConfig.vue'
import FullSreenConfig from '@/components/SettingVue/DefaultConfigVue/FullSreenConfig.vue'
</script>

<template>
    <el-card shadow="hover" class="delault-config-container">
        <SettingItem>
            <template #title>配置项</template>
            <template #default>说明</template>
            <template #setting>操作</template>
        </SettingItem>
        <DarkConfig></DarkConfig>
        <FullSreenConfig></FullSreenConfig>
    </el-card>
</template>

<style lang="less">
.delault-config-container {
    .el-col>div {
        padding-left: 1em;
        height: 2em;
        line-height: 2em;
        font-weight: 700;
        border-radius: 4px;
        background-color: var(--el-color-info-light-5);
    }
}
</style>
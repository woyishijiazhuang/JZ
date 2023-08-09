<!-- bug:vsCode在这里有一个类型报错，实际上是没有的 在settings.json中设置 "javascript.validate .enable": false -->
<script setup>
import MenuItems from '@/components/MenuVue/MenuItems.vue'

// 获取本地路由配置
import { useLocalRoutes } from '@/store'
const localRoutes = useLocalRoutes()

</script>
<template>
    <el-card shadow="hover" class="local-routes-container">
        <template #header>本地路由配置</template>
        <el-menu style="border-right: none;" unique-opened>
            <MenuItems v-for="item in localRoutes" :all-show="true" :item="item">
                <template #default="{ item }">
                    <span>{{ item.name }}</span>
                    <!-- 阻止事件冒泡导致展开导航 -->
                    <div @click.stop="">
                        <el-switch v-if="item.meta.show == 'must'" disabled title="must show"></el-switch>
                        <el-switch v-else v-model="item.meta.show"></el-switch>
                    </div>
                </template>
            </MenuItems>
        </el-menu>
    </el-card>
</template>
<style lang="less">
// switch 位置
.local-routes-container {

    .el-sub-menu__title,
    .el-menu-item {
        justify-content: space-between;
    }
}
</style>
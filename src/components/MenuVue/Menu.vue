<!-- 路由仅支持二层嵌套 如果有多层需要抽离组件 递归调用 -->
<script setup>
// 导入图片和菜单子组件
import avatarImg from '@/assets/avatar.jpg'
import MenuItems from './MenuItems.vue'

// 持久化menu活动，监听路由，将每次活动的menu选项存储在本地
import { useRoute } from 'vue-router'
import { watchEffect } from 'vue'
import { useMenuDefaultActiveState } from '@/store'

const route = useRoute()
const defaultActive = useMenuDefaultActiveState()
watchEffect(() => (defaultActive.value = route.fullPath))

// 控制路由的渲染的全局本地存储对象
import { useLocalRoutes } from '@/store'
const localRoutes = useLocalRoutes()
</script>

<template>
    <!--  unique-opened 是否展只开一个， router 将index作为导航-->
    <el-menu :default-active="defaultActive" class="el-menu-vertical-demo" router unique-opened>
        <el-menu-item index="/" style="justify-content: center;">
            <template #title>
                <h1 title="woyishijiazhuang.github">
                    <img :src="avatarImg" alt="avatar">
                </h1>
            </template>
        </el-menu-item>
        <MenuItems v-for="item in localRoutes" :item="item">
            <template #default="{item}">{{ item.name }}</template>
        </MenuItems>
    </el-menu>
</template>

<style lang="less">
.el-menu {
    height: 100%;
    user-select: none;
}

h1 {
    /* background: #ccc; */
    margin: 0%;
    line-height: 32px;
    font-size: 32px;
    text-align: center;
}

h1 img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    vertical-align: bottom;
}
</style>
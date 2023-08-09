<script setup>
import { toRefs } from 'vue'
// item:单个路由对象，不能是route根对象
// beforePath:因为子路由的路径不是完整的，所以index要拼接上所有上级路径
// allSow:强制显示所有路由，bug：不能只写属性靠隐式转换成true
const props = defineProps(['item', 'beforePath', 'allShow'])
const { item, beforePath, allShow } = toRefs(props)
// 当前index或者子路由的index前缀
const indexORbeforePath = beforePath.value ? `${beforePath.value}/${item.value.path}` : item.value.path

// 作用域slot，自定义title内容
</script>

<template>
    <template v-if="item.meta.show || allShow">
        <template v-if="item.children">
            <el-sub-menu v-if="item.children.some(v => v.meta.show) || allShow" :index="indexORbeforePath">
                <template #title>
                    <slot :item="item"></slot>
                </template>
                <MenuItems v-for="item2 in item.children" :item="item2" :beforePath="indexORbeforePath" :allShow="allShow">
                    <slot :item="item2"></slot>
                </MenuItems>
            </el-sub-menu>
        </template>
        <el-menu-item v-else :index="indexORbeforePath">
            <template #title>
                <slot :item="item"></slot>
            </template>
        </el-menu-item>
    </template>
</template>
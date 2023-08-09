<script setup>
import useImgUrl from '@/hooks/useImgUrl.js'
// 获取图片地址
const { url } = useImgUrl()
const data = [
    {
        name: '添加pwa',
        status: 'waiting',
        desc: '等待完成'
    },
    {
        name: '为任意一个dom添加弹幕',
        status: 'waiting',
        desc: '等待完成'
    }
]

</script>

<template>
    <ul :style="{ backgroundImage: 'url(' + url + ')' }">
        <li v-for="item in data">
            <el-tag>{{ item.status }}</el-tag>
            <el-tag type="success">{{ item.name }}</el-tag>
        </li>
    </ul>
</template>

<style scoped>
ul {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
}
</style>
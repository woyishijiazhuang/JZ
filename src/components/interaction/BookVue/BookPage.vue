<script setup>
import {  } from 'vue'
import avatarImg from '@/assets/avatar.jpg';
const props = defineProps(['page-show', 'index'])
</script>

<template>
    <li :class="`atlas ${ props.pageShow && 'page-show' }`">
        <h3>JZ{{ props.index }}</h3>
        <img v-for="i in [0,1,2]" :src="avatarImg" :key="i" alt="jz">
    </li>
</template>

<style lang="less">
/* page>li页面样式 */
li.atlas {
    width: 100%;
    height: 100%;
    position: absolute;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    transform-origin: left center;
    transition-property: transform;
    transition-timing-function: ease;

    background: linear-gradient(to left, rgb(225, 221, 216) 0%, rgb(255, 251, 246) 100%);
    box-shadow: rgba(50, 50, 50, 0.1) 0px -1px 2px inset, rgba(150, 150, 150, 0.2) -1px 0px 1px inset;
    border-radius: 0px 5px 5px 0px;
}

/* 确保背面不透明 */
li.atlas::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    transform: rotateY(180deg);
    background: -webkit-linear-gradient(right, rgb(225, 221, 216) 0%, rgb(255, 251, 246) 100%);
    border-radius: 5px 0px 0px 5px;
    box-shadow: rgba(50, 50, 50, 0.1) 1px -1px 2px inset, rgba(150, 150, 150, 0.2) -1px 0px 1px inset;
}

.atlas {
    backface-visibility: visible;
    display: grid;
    grid-template-areas:
        "h3 h3 h3 h3"
        "img img img2 img2"
        "img img img2 img2"
        "img3 img3 img3 img3";
    /* 2.区域划分 当前为 三行 两列 */
    grid-template-rows: 1fr 1fr 1fr 1fr;
    /* 3.各区域 宽高设置 */
    grid-template-columns: auto;

    h3 {
        grid-area: h3;
        text-align: center;
    }

    img {
        width: 40%;
        border: 4px solid;
        border-image: -webkit-linear-gradient(right, rgba(155, 155, 155, 0.15) 0%, rgba(155, 155, 155, 0.25) 100%) 2 2 2 2;
    }

    img:nth-child(2) {
        margin-left: 50%;
        grid-area: img;
        transform: rotate(-5deg);
    }

    img:nth-child(3) {
        width: 40%;
        margin: -10% 0% 0 25%;
        grid-area: img2;
        transform: rotate(10deg);
    }

    img:nth-child(4) {
        width: 60%;
        margin-left: 20%;
        margin-bottom: 3%;
        grid-area: img3;
    }
}
</style>
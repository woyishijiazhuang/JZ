<script setup>
import { ref } from 'vue'
import CoverDesign from './CoverDesign.vue';
import BookPage from './BookPage.vue'

const pageShow = ref(-1)
</script>

<template>
    <el-card style="width: 600px;height: 450px;">
        <template #header>
            <span style="font-weight: 700;">相册</span>
            <sub style="float: right;">每一页每一张图都用了相同的素材</sub>
        </template>
        <figure class="book-container">
            <!-- 封面 -->
            <ul class="hardcover_front front-back-spine">
                <!-- 正面 -->
                <li>
                    <CoverDesign></CoverDesign>
                </li>
                <!-- 反面 -->
                <li></li>
            </ul>
            <!-- Pages -->
            <ul class="page">
                <BookPage v-for="i in [0, 1, 2, 3, 4]" :key="i" :index="i" :page-show="pageShow == i"></BookPage>
            </ul>
            <!-- Back -->
            <ul class="hardcover_back front-back-spine">
                <li></li>
                <li></li>
            </ul>
            <!-- 书脊 -->
            <ul class="book_spine front-back-spine">
                <li></li>
                <li></li>
            </ul>
            <!-- 控制器 -->
            <figcaption>
                <el-radio-group v-model="pageShow">
                    <el-radio-button label="0"></el-radio-button>
                    <el-radio-button label="1"></el-radio-button>
                    <el-radio-button label="2"></el-radio-button>
                    <el-radio-button label="3"></el-radio-button>
                    <el-radio-button label="4"></el-radio-button>
                    <el-radio-button label="-1">关闭</el-radio-button>
                </el-radio-group>
            </figcaption>
        </figure>
    </el-card>
</template>

<style lang="less">

.book-container {
    // background: rgb(222, 235, 239);
    color: rgb(52, 73, 94);
    font-family: Lato, Arial, sans-serif;
    font-weight: 400;
    line-height: 1.2;
    /* 书宽, 书高, 书厚, 封面厚度 */
    --book-w: 160px;
    --book-h: 220px;
    --book-t: 8px;
    --hardcover-thick: 2px;
    position: relative;
    width: var(--book-w);
    height: var(--book-h);
    margin: auto;
    perspective: 1000px;
    transform-style: preserve-3d;

    ::before,
    ::after {
        content: "";
    }

    /* 封面 背面 书脊 里衬的颜色 */
    .hardcover_front li:first-child {
        background-color: rgb(238, 238, 238);
        backface-visibility: hidden;
    }

    .hardcover_front li:last-child,
    .hardcover_back li {
        background: rgb(255, 251, 236);
    }

    .book_spine li:first-child {
        background: rgb(238, 238, 238);
    }

    .book_spine li:last-child {
        background: rgb(51, 51, 51);
    }

    /* 封面,后面,书脊 伪元素公共样式 */
    .front-back-spine li::after,
    .front-back-spine li::before {
        position: absolute;
        top: 0px;
        left: 0px;
        background: rgb(153, 153, 153);
    }

    /* 所有元素开启3d */
    .front-back-spine,
    .front-back-spine li {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
    }

    /* 设置变换点 */
    .hardcover_front,
    .hardcover_back {
        transform-origin: left;
    }

    /* 封面,后面,书脊 的3d盒子效果 */
    .front-back-spine {
        li:first-child {
            transform: translateZ(var(--hardcover-thick));
        }

        li:last-child {
            transform: rotateY(180deg) translateZ(var(--hardcover-thick));
        }
    }

    .front-back-spine li:first-child::after,
    .front-back-spine li:first-child::before {
        width: calc(var(--hardcover-thick) * 2);
        height: 100%;
        transform-origin: left;
    }

    .front-back-spine li:first-child::after {
        transform: rotateY(90deg);
    }

    .front-back-spine li:first-child::before {
        left: 100%;
        transform: rotateY(90deg);
    }

    .front-back-spine li:last-child::before,
    .front-back-spine li:last-child::after {
        width: 100%;
        height: calc(var(--hardcover-thick) * 2);
        transform-origin: top;
    }

    .front-back-spine li:last-child::after {
        transform: rotateX(-90deg);
    }

    /* 书本下方的影子 */
    .front-back-spine li:last-child::before {
        box-shadow: rgb(51, 51, 51) 0px 0px 30px 5px;
        top: 100%;
        transform: rotateX(-90deg);
    }

    .page {
        position: absolute;
        width: 100%;
        height: 98%;
        top: 1%;
        left: 3%;
        z-index: 10;
        transform-style: preserve-3d;
    }

    /* book初始化样式 */
    /* 封面合上book时的样式 */
    .front-back-spine {
        transition-duration: 0.6s;
    }

    .hardcover_front {
        transform: rotateY(-34deg) translateZ(var(--book-t));
        z-index: 100;
        user-select: none;
    }

    /* 后面位置 */
    .hardcover_back {
        transform: rotateY(-15deg) translateZ(calc(0px - var(--book-t)));
    }

    /* 书脊位置 */
    .book_spine {
        width: calc(var(--book-t) * 2);
        transform-origin: left;
        transform: translateX(calc(var(--hardcover-thick) * -1)) rotateY(60deg) translateZ(calc(var(--book-t) * -1));
    }

    /* 每个单页的初始样式 */
    each(range(5), {
        li.atlas:nth-child(@{value}) {
            transform: rotateY(-38deg + 2 * @value);
            transition-duration: 0.6s;
        }
    });

/* book打开时样式 */
&:has(.page-show)>.hardcover_front {
    transform: rotateY(-145deg) translateZ(0px);
}

&:has(.page-show)>.hardcover_back {
    transform: rotateY(10deg) translateZ(calc(var(--book-t) * -1)) translateX(calc(var(--book-t) * 3));
}

&:has(.page-show)>.book_spine {
    transform: translateX(calc(var(--book-t) * -1)) rotateY(30deg) translateZ(calc(var(--book-t) * -1));
}

// 平面显示的页面，注意选择器权重的覆盖
ul.page>li.atlas.page-show {
    transform: rotateY(0deg);
    transition-duration: 1s;
}

each(range(1, 4, 1), {
    &:has(.page-show)>.page>li:nth-child(@{value}) {
        transform: rotateY(-145deg + 4 * @value);
        transition-duration: (0.5s + 0.1 * @value);
    }
});

each(range(2, 5, 1), {
    &:has(.page-show)>ul.page>li.page-show~li:nth-child(@{value}) {
        transform: rotateY((@value - 1) * 2deg) translateX(calc(var(--hardcover-thick) * (@value - 1)));
        transition-duration: 1.1s - @value * 0.1;
    }
});

/* 按钮样式 */
figcaption {
    position: absolute;
    top: 100%;
    left: 50%;
    width: 200%;
    display: flex;
    justify-content: center;
    transform: translateY(200%) translateX(-50%);
    user-select: none;
}

}
</style>
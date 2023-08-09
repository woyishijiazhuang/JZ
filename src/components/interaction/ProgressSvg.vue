<!-- 最终通过transfrom scale缩放调整大小比较好,做成组件会比较麻烦 -->
<script setup>
import { computed, onMounted, ref } from 'vue'
import DarkSwitch from '@/components/SettingVue/DefaultConfigVue/DarkSwitch.vue'

// 以下ref 可以在后续通过props写成组件
// 动画的其他属性
const svgData = ref({
    progress: 0, // 实时进度，范围【0，1】
    progressText: computed(() => `${Math.floor(svgData.value.progress * 100)}`), // 进度文字，范围【0%，100%】
    circleR: 96, // 进度圆环半径，范围【0，100】，取到两边肯定会出问题，具体限制
    strokeWidth: computed(() => 2 * (100 - svgData.value.circleR)), // 圆环线的宽度，应满足 progressR + strokeWidth/2 <= 100
    strokeDasharray1: 2, // 实线长度
    strokeDasharray2: 2.1, // 空余长度，实线加空余如果不是周长的整除数，容易造成起点和结束点连接不规则
    result: 0 // 最终进度
})
let dsq;
// @parmas number, number,添加进度,动画时间s
function addProgress(num, time = 0.1) {
    // 动画没走完,就不走了
    if (dsq) clearInterval(dsq)
    // 设置最终进度的位置
    if (svgData.value.result + num > 1) {
        svgData.value.result = 1
        num = 1 - svgData.value.progress
    } else {
        svgData.value.result += num
    }
    // 计算每次应该走多少
    const lit = num / time / 100
    dsq = setInterval(() => {
        // 到了最终进度就清除计时器
        if (svgData.value.progress >= svgData.value.result) {
            // svgData.value.progress = 1
            clearInterval(dsq)
        } else {
            svgData.value.progress += lit
        }
    }, 10)
}

onMounted(() => {
    addProgress(0.6, 3)
    setTimeout(() => {
        addProgress(0.4, 1)
    }, 4000)
})

// 互动组件和数据
// 清空进度
function clearData() {
    svgData.value.progress = 0
    svgData.value.result = 0
}
const addData = ref({
    add: 16,
    time: 1,
})
</script>

<template>
    <el-card class="progress2-container">
        <template #header>
            <div class="card-header">
                <span style="font-weight: 700;">进度条SVG</span>
                <sub style="float: right;">
                    使用了混色模式，当背景为白色时才能正常显示&nbsp;
                    <DarkSwitch />
                </sub>
            </div>
        </template>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" style="width: 200px;height: 200px;" viewBox="0 0 200 200">
            <g style="transform: rotate(-90deg);transform-origin: 50% 50%;">
                <circle cx="100" cy="100" stroke="url(#linear1)" fill="transparent" :r="svgData.circleR"
                    :stroke-width="svgData.strokeWidth"
                    :stroke-dasharray="`${svgData.strokeDasharray1} ${svgData.strokeDasharray2}`" />
                <circle style="mix-blend-mode:hue" cx="100" cy="100" stroke="black" stroke-dasharray="603"
                    fill="transparent" :r="svgData.circleR" :stroke-width="svgData.strokeWidth"
                    :stroke-dashoffset="-603 * svgData.progress">
                </circle>
            </g>
            <text x="50%" y="50%" style="font-size: 3rem;" fill="currentColor" dominant-baseline="middle"
                text-anchor="middle">
                {{ svgData.progressText }}
            </text>
            <text x="73%" y="53%" style="font-size: 16px;" fill="currentColor">%</text>
            <defs>
                <linearGradient id="linear1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="coral" />
                    <stop offset="50%" stop-color="skyblue" />
                    <stop offset="100%" stop-color="limegreen" />
                </linearGradient>
            </defs>
        </svg>

        <div class="draw-from">
            在
            <el-input-number v-model="addData.time" :min="0" :max="7"></el-input-number>
            秒内, 补充
            <el-input-number v-model="addData.add" :min="0" :max="100" :step="1"></el-input-number>
            到进度中
            <el-button v-if="svgData.progress >= 1" @click="clearData">清空</el-button>
            <el-button v-else @click="addProgress(addData.add / 100, addData.time)">补充</el-button>
        </div>
    </el-card>
</template>

<style lang="less">
.progress2-container {
    // border: 1px solid red

    .el-card__body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .draw-from {
        font-size: larger;
        font-weight: 700;
        vertical-align: middle;
        margin-top: 8rem;
        user-select: none;

        .el-input-number {
            margin: 0 .5rem;
        }
    }
}
</style>
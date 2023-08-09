<script setup>
import { reactive, computed } from 'vue'
import { ElMessage } from 'element-plus'
import DocumentCopy from '@/icon/DocumentCopy.vue';
const border = reactive({ top: 46, left: 34, right: 40, bottom: 68 })

const borderRadius = computed(() => {
    return `${border.top}% ${100 - border.top}% ${100 - border.bottom}% ${border.bottom}% / ${100 - border.left}% ${100 - border.right}% ${border.right}% ${border.left}%`
})
function tick() {
    // http环境下无法使用这个api
    if (navigator.clipboard) {
        navigator.clipboard.writeText("border-radius: " + borderRadius.value + ";")
        ElMessage.success('复制成功')
    } else {
        ElMessage.error('非安全环境!')
    }
}
</script>

<template>
    <el-card class="border-radius-container">
        <template #header>
            <div class="card-header">
                <span style="font-weight: 700;">圆角边框</span>
                <sub style="float: right;">对不规则圆角的探索，下次构建一个贝塞尔曲线版本</sub>
            </div>
        </template>
        <div class="border-radius-main" :style="{ '--borderRadius': borderRadius }">
            <el-row>
                <el-col :span="3" :offset="3"><el-slider v-model="border.top" class="top" /></el-col>
            </el-row>
            <el-row>
                <el-col :span="3"><el-slider v-model="border.left" vertical class="left" /></el-col>
                <el-col :span="18">
                    <div class="content-show"></div>
                </el-col>
                <el-col :span="3"><el-slider v-model="border.right" vertical class="right" /></el-col>
            </el-row>
            <el-row>
                <el-col :span="3" :offset="3"><el-slider v-model="border.bottom" class="bottom" /></el-col>
            </el-row>

        </div>
        <el-input :value="borderRadius">
            <template #prepend>border-radius:</template>
            <template #append>
                <el-button @click="tick">
                    <DocumentCopy />
                </el-button>
            </template>
        </el-input>
    </el-card>
</template>

<style lang="less">
.border-radius-container {
    .el-input {
        width: 32rem;
    }

    --b-size: 24rem;
}

.border-radius-main {
    width: var(--b-size);
    height: var(--b-size);
    margin: 2rem auto;
    // background-color: #e9e9e9;
    // box-shadow: 0 0 2rem 2rem #e9e9e9;

    .el-slider {
        width: 18rem;
    }

    .el-slider.is-vertical {
        width: auto;
        height: 18rem;
    }

    .left {
        float: right;
    }

    .content-show {
        box-sizing: border-box;
        width: 18rem;
        height: 18rem;
        border-radius: var(--borderRadius);
        box-shadow: inset 1rem 2rem 3rem rgba(0, 0, 0, 0.5),
            1rem 1rem 2rem rgba(0, 0, 0, 0.3),
            1.5rem 1.5rem 3rem rgba(0, 0, 0, 0.05),
            inset -1rem -1rem 3rem rgba(255, 255, 255, 0.8);

        &::before {
            content: '';
            position: absolute;
            top: 15%;
            left: 50%;
            width: 3rem;
            height: 3rem;
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: var(--borderRadius);
        }

        &::after {
            content: '';
            position: absolute;
            top: 25%;
            left: 30%;
            width: 1.5rem;
            height: 1.5rem;
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: var(--borderRadius);
        }
    }

}</style>
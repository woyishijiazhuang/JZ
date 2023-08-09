<!-- 需要加进度条动画，考虑使用svg -->
<script setup>
import { onMounted, ref } from 'vue';

// 初始仪表盘份数，进度，绘制函数
const num = ref(7)
const progress = ref(3.5)
const colorArr = ['#845EC2', '#D65DB1', '#FF6F91', '#FF9671', '#FFC75F', '#F9F871']
function drawProgress(num, p) {
  const canvas = document.getElementById("progressCanvas");
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height)

  const centerX = canvas.width / 2;
  const centerY = canvas.height;
  const radius = canvas.width / 2 - centerY/20; // 半径为圆的宽度的一半减去一定的间距

  // 绘制外部绿色
  context.beginPath();
  context.arc(centerX, centerY, radius, Math.PI, 0);
  context.lineWidth = centerY/20 * 1.5;
  context.strokeStyle = "#845EC2";
  context.stroke();

  // 绘进度条底色
  context.beginPath();
  context.arc(centerX, centerY, radius - centerY/20 * 2.5, Math.PI, 0);
  context.lineWidth = centerY/20 * 3;
  context.strokeStyle = "#B39CD0";
  context.stroke();

  // 绘制进度路径线
  context.beginPath();
  context.arc(centerX, centerY, radius - centerY/20 * 2.5, Math.PI, 0);
  context.lineWidth = centerY/200;
  context.strokeStyle = "#FBEAFF";
  context.stroke();
  
  // 绘制区间
  for(let i = 0; i < num; i++) {
    // 这里的50和200被写死了,实际上要计算
    context.beginPath();
    context.arc(centerX, centerY, centerY/20 * 5, Math.PI * (1+i/num) , Math.PI * (1 + (i+1)/num), false);
    context.lineWidth = centerY;
    // context.strokeStyle = `rgba(${255 * Math.random()}, ${255 * Math.random()}, ${255 * Math.random()}, 0.6`;
    context.strokeStyle = colorArr[i % colorArr.length];
    context.stroke();
  }

  // 圆心 + p计算进度位置
  const x =  centerX + centerY/20 * 16.5 * Math.cos(Math.PI * (1 + p/num))
  const y =  centerY + centerY/20 * 16.5 * Math.sin(Math.PI * (1 + p/num))
  context.beginPath();
  context.arc(x, y, centerY/40, 0, 2 * Math.PI);
  context.lineWidth = centerY/100;
  context.strokeStyle = 'white';
  context.fillStyle = "orange";
  context.fill()
  context.stroke();
}
// 改变份数时，调整进度最大值
function handleInput () {
    if( num.value < progress.value) {
        progress.value = num.value
    }
}
// 挂载后初始化
onMounted(() => {
    // 绘制多少份,进度位置
    drawProgress(9, 3.5);
})
</script>

<template>
<el-card class="progress-container">
    <template #header>
        <span style="font-weight: 700;">进度条Canvas</span>
        <sub style="float: right;">使用Canvas绘制</sub>
    </template>
    <canvas id="progressCanvas" width="800" height="400"></canvas>
    <div class="draw-form">
        <div>
            <label>仪表份数:</label>
            <el-input-number v-model="num" :min="1" :max="10" @change="handleInput"></el-input-number>
        </div>
        <div>
            <label>仪表进度:</label>
            <el-input-number v-model="progress" :min="0" :max="num" :step="0.1"></el-input-number>
        </div>

        <el-button @click="drawProgress(num, progress)">重绘</el-button>
    </div>
</el-card>
</template>

<style scoped lang="less">
.progress-container {
    
    canvas {
        transform: scale(0.5);
    }

    label {
        font-size:larger;
        font-weight: 700;
        vertical-align: middle;
        margin-right: 1rem;
        user-select: none;
    }
    .draw-form {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
    }
}
</style>
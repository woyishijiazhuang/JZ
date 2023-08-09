<script setup >
// import { Message } from 'element-ui';
import { ref } from 'vue'
const dom = ref()
window.addEventListener("gamepadconnected", function(e) {
  console.log("控制器已连接于 %d 位：%s. %d 个按钮，%d 个坐标方向。",
    e.gamepad.index, e.gamepad.id,
    e.gamepad.buttons.length, e.gamepad.axes.length);
});

</script>

<template>
<div class="test-container" :ref="dom">
test
</div>
</template>

<style>

</style>
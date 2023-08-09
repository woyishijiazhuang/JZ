<script setup>
import { useDark } from '@vueuse/core'
import Menu from '@/components/MenuVue/Menu.vue';
useDark() // 确保第一次进入页面能读取用户本地存储的色彩模式

</script>

<template >
  <el-container style="height: 100vh;">
    <el-aside width="140px">
      <Menu></Menu>
    </el-aside>
    <el-main>
        <RouterView></RouterView>
    </el-main>
  </el-container>
</template>

<style scoped>
.el-main {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<template>
  <div class="box">app组件</div>
  <ul>
    <li>234</li>
    <li>234</li>
  </ul>
</template>

<script lang="ts" setup>
// 模拟的接口请求
import {onMounted} from "vue";
import request from "./utils/request";

onMounted(() => {
  // 请求接口
  request({
    url: '/home/index',
    method: 'GET'
  }).then(res => {
    console.log(res)
  })
})
</script>
<style lang="less">
// 必须导入variables.less
// 全局一次性的引入
.box {
  background: @xtxColor;
  .hoverShadow();
}
</style>

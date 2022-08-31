<template>
  <div>app组件</div>
</template>

<script lang="ts" setup>
// 模拟的接口请求
import {onMounted} from "vue";
import request from "./utils/request";

onMounted(() => {
//  请求接口
  request({
    url: '/home/index',
    method: 'GET'
  }).then(res => {
    console.log(res)
  })
})
</script>

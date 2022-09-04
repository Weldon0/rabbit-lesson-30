<script lang="ts" setup>
// 给ref添加组件类型
import { ref } from 'vue'
import HomePanel from '@/views/home/components/home-panel.vue'
const target = ref<InstanceType<typeof HomePanel> | null>(null)
console.log(target.value?.age)
</script>

<template>
  <div>
    <HomePanel ref="target" sub-title="测试2" title="测试1" />
  </div>
</template>

<style lang="less" scoped>
img {
  width: 400px;
  height: 400px;
}
</style>

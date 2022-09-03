<script lang="ts" setup>
// 获取轮播图数据
import useStore from "@/store";

const {homeStore} = useStore()

// 调用pinia方法获取轮播图数据
homeStore.getBannerList()
</script>
<template>
  <div class="home-banner">
    <!-- 轮播图 -->
    <XtxCarousel :auto-play="true" :duration="500" :slides="homeStore.list"></XtxCarousel>
  </div>
</template>

<style scoped lang="less">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;
  background-color: pink;

  :deep(.carousel-btn.prev) {
    left: 270px !important;
  }

  :deep(.carousel-indicator) {
    padding-left: 250px;
  }
}
</style>

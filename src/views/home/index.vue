<script lang="ts" setup>
import HomeBanner from './components/home-banner.vue'
import HomeCategory from './components/home-category.vue'
import HomeNew from '@/views/home/components/home-new.vue'
import HomeHot from '@/views/home/components/home-hot.vue'
import Test from '@/views/home/test.vue'
</script>

<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
        <!-- banner轮播图 -->
        <HomeBanner />
      </div>
      <!--新鲜好物组件-->
      <HomeNew />
      <!--人气推荐-->
      <HomeHot />
    </div>
    <test />
  </div>
</template>

<style lang="less" scoped></style>

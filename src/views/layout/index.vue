<script lang="ts" setup name="Layout">
import AppTopnav from "@/views/layout/components/app-topnav.vue";
import AppHeader from "@/views/layout/components/app-header.vue";
import AppFooter from "@/views/layout/components/app-footer.vue";
import AppHeaderSticky from "@/views/layout/components/app-header-sticky.vue";
</script>
<template>
  <!--  顶部通栏-->
  <AppTopnav />
  <!--  吸顶的头部-->
  <AppHeaderSticky />
  <!--  头部-->
  <AppHeader />
  <div class="app-body">
    <!--路由出口占位-->
    <router-view />
  </div>
  <!--  底部-->
  <AppFooter />
</template>
<style lang="less" scoped>
//.app-body {
//  height: 800px;
//}
</style>

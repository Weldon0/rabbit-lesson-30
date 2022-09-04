<script lang="ts" setup>
import useStore from '@/store'
import HomePanel from './home-panel.vue'
import { useLazyData } from '@/utils/hooks'
import HomeSkeleton from '@/views/home/components/home-skeleton.vue'

const { homeStore } = useStore()
const target = useLazyData(homeStore.getHotGoodsList)
</script>
<template>
  <HomePanel ref="target" title="人气推荐" sub-title="人气爆款 不容错过">
    <transition name="fade">
      <ul ref="pannel" class="goods-list" v-if="homeStore.hotGoodsList.length">
        <li v-for="item in homeStore.hotGoodsList" :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture" alt="" />
            <p class="name">{{ item.title }}</p>
            <p class="desc">{{ item.alt }}</p>
          </RouterLink>
        </li>
      </ul>
      <home-skeleton v-else />
    </transition>
  </HomePanel>
</template>

<style scoped lang="less">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;

  li {
    width: 306px;
    height: 406px;
    .hoverShadow();

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }

    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>

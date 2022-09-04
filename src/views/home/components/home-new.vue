<script lang="ts" setup>
import HomePanel from './home-panel.vue'
import useStore from '@/store'
import { useLazyData } from '@/utils/hooks'
import HomeSkeleton from '@/views/home/components/home-skeleton.vue'

const { homeStore } = useStore()
// 当前组件出现在用户可视区的时候，再去调用接口获取数据
// 获取组件ref
const target = useLazyData(homeStore.getNewGoodsList)
</script>
<template>
  <div class="home-new">
    <HomePanel ref="target" title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
      <template #right>
        <XtxMore path="/" />
      </template>
      <!-- 面板内容 -->
      <transition name="fade">
        <ul class="goods-list" v-if="homeStore.newGoodsList.length">
          <li v-for="item in homeStore.newGoodsList" :key="item.id">
            <RouterLink to="/">
              <img :src="item.picture" alt="" />
              <p class="name ellipsis">{{ item.name }}</p>
              <p class="price">&yen;{{ item.price }}</p>
            </RouterLink>
          </li>
        </ul>
        <home-skeleton v-else />
      </transition>
    </HomePanel>
  </div>
</template>

<style scoped lang="less">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    .hoverShadow();

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding: 12px 30px 0 30px;
      text-align: center;
    }

    .price {
      color: @priceColor;
    }
  }
}
</style>

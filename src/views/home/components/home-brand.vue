<script lang="ts" setup name="HomeBrand">
import HomePanel from './home-panel.vue'
import { useLazyData } from '@/utils/hooks'
// 组件数据懒加载 useLazyData
import useStore from '@/store'
import HomeSkeleton from '@/views/home/components/home-skeleton.vue'

const { homeStore } = useStore()
const target = useLazyData(homeStore.getBrandList)
// 添加transition切换动画
// 添加骨架屏优化
// 组件数据懒加载
</script>

<template>
  <HomePanel ref="target" title="热门品牌" sub-title="国际经典 品质保证">
    <template v-slot:right>
      <a href="javascript:" class="iconfont icon-angle-left prev"></a>
      <a href="javascript:" class="iconfont icon-angle-right next"></a>
    </template>
    <div class="box" ref="box">
      <transition name="fade">
        <ul class="list" v-if="homeStore.brandList.length">
          <li v-for="item in homeStore.brandList" :key="item.id">
            <RouterLink to="/">
              <img :src="item.picture" alt="" />
            </RouterLink>
          </li>
        </ul>
        <home-skeleton v-else />
      </transition>
    </div>
  </HomePanel>
</template>

<style scoped lang="less">
.home-panel {
  //background: #f5f5f5;
}

.iconfont {
  width: 20px;
  height: 20px;
  background: #ccc;
  color: #fff;
  display: inline-block;
  text-align: center;
  margin-left: 5px;
  background: @xtxColor;

  &::before {
    font-size: 12px;
    position: relative;
    top: -2px;
  }

  &.disabled {
    background: #ccc;
    cursor: not-allowed;
  }
}

.box {
  display: flex;
  width: 100%;
  height: 345px;
  overflow: hidden;
  padding-bottom: 40px;

  .list {
    width: 200%;
    display: flex;
    transition: all 1s;

    li {
      margin-right: 10px;
      width: 240px;

      &:nth-child(5n) {
        margin-right: 0;
      }

      img {
        width: 240px;
        height: 305px;
      }
    }
  }
}
</style>

<script lang="ts" setup name="HomeCategory">
import {computed, ref, watch} from "vue";
// 引入分类的store
import useStore from "@/store";

const {categoryStore} = useStore();

// 定义一个用于存储当前分类id的变量
const currentCategoryId = ref();
// 鼠标滑动到分类的时候，当前选中的分类id记录下来
const goods = computed(() => {
  return categoryStore.list.find((item) => {
    return item.id === currentCategoryId.value;
  })?.goods;
});

watch(goods, (value) => {
  console.log(value);
});
console.log(goods);
</script>
<template>
  <div class="home-category">
    <ul class="menu" @mouseleave="currentCategoryId = ''">
      <!-- 弹层 -->
      <div class="layer">
        <h4>分类推荐 <small>根据您的购买或浏览记录推荐</small></h4>
        <ul>
          <li v-for="item in goods" :key="item.id">
            <RouterLink to="/">
              <img :src="item.picture" alt=""/>
              <div class="info">
                <p class="name ellipsis-2">{{ item.name }}</p>
                <p class="desc ellipsis">{{ item.desc }}</p>
                <p class="price"><i>¥</i>{{ item.price }}</p>
              </div>
            </RouterLink>
          </li>
        </ul>
      </div>
      <li
          v-for="item in categoryStore.list"
          :key="item.id"
          @mouseenter="currentCategoryId = item.id"
          :class="{ active: item.id === currentCategoryId }"
      >
        <!--一级分类-->
        <RouterLink :to="`/category/${item.id}`">{{ item.name }}</RouterLink>

        <!--当前一级分类的子分类-->
        <template v-if="item.children">
          <RouterLink
              :to="`/category/sub/${subItem.id}`"
              v-for="subItem in item.children?.slice(0, 2)"
              :key="subItem.id"
          >
            {{ subItem.name }}
          </RouterLink>
        </template>
        <template v-else>
          <XtxSkeleton
              style="margin-left: 10px"
              :width="50"
              animated
              fade
              :height="20"
              bg="rgba(255,255,255,0.2)"
          />
          <XtxSkeleton
              style="margin-left: 15px"
              :width="50"
              animated
              fade
              :height="20"
              bg="rgba(255,255,255,0.2)"
          />
        </template>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="less">
.home-category {
  width: 250px;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 99;

  .menu {
    li {
      padding-left: 40px;
      height: 55px;
      line-height: 55px;

      &:hover,
      &.active {
        background: @xtxColor;
      }

      a {
        margin-right: 4px;
        color: #fff;

        &:first-child {
          font-size: 16px;
        }
      }
    }
  }

  .layer {
    width: 990px;
    height: 500px;
    background: rgba(255, 255, 255, 0.8);
    position: absolute;
    left: 250px;
    top: 0;
    display: none;
    padding: 0 15px;

    h4 {
      font-size: 20px;
      font-weight: normal;
      line-height: 80px;

      small {
        font-size: 16px;
        color: #666;
      }
    }

    ul {
      display: flex;
      flex-wrap: wrap;

      li {
        width: 310px;
        height: 120px;
        margin-right: 15px;
        margin-bottom: 15px;
        border: 1px solid #eee;
        border-radius: 4px;
        background: #fff;

        &:nth-child(3n) {
          margin-right: 0;
        }

        a {
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
          padding: 10px;

          &:hover {
            background: #e3f9f4;
          }

          img {
            width: 95px;
            height: 95px;
          }

          .info {
            padding-left: 10px;
            line-height: 24px;
            width: 190px;

            .name {
              font-size: 16px;
              color: #666;
            }

            .desc {
              color: #999;
            }

            .price {
              font-size: 22px;
              color: @priceColor;

              i {
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }

  &:hover {
    .layer {
      display: block;
    }
  }
}
</style>

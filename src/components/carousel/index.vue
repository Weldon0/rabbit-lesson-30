<script lang="ts" setup name="XtxCarousel">
import { BannerItem } from "@/types";
import { onMounted, onUnmounted, PropType, ref } from "vue";
// 如果想要在js引入的写法里面限制更加精确的类型
// 可以使用PropType
const props = defineProps({
  slides: {
    type: Array as PropType<BannerItem[]>, // BannerItem[]
    required: true,
  },
  // 是否开启自动播放
  autoPlay: {
    type: Boolean,
    value: false,
  },
  // 自动播放的间隔时间
  // 默认情况下是3s
  duration: {
    type: Number,
    value: 3000,
  },
});
// 存储当前选中的index
const currentIndex = ref(0);

// 点击切换功能
// 下一张
const next = () => {
  // currentIndex的值不能超过图片的长度
  if (currentIndex.value >= props.slides.length - 1) {
    currentIndex.value = 0;
  } else {
    currentIndex.value++;
  }
};
// 点击上一张
const prev = () => {
  if (currentIndex.value <= 0) {
    currentIndex.value = props.slides.length - 1;
  } else {
    currentIndex.value--;
  }
};

// 定时器的标识
let timer = 0;

// 页面挂在完成的时候，需要判断进行自动播放
onMounted(() => {
  play();
});

// 处理自动播放功能
const play = () => {
  // 如果自动播放没有开启，代码终止
  if (!props.autoPlay) return;
  //  开启定时器去自动切换
  timer = window.setInterval(() => {
    next();
  }, props.duration);
};

onUnmounted(() => {
  stop();
});
// 停止播放的方法
// 组件卸载的时候，需要销毁定时器
const stop = () => {
  //  清除定时器
  window.clearInterval(timer);
};
</script>

<template>
  <!--  鼠标移入到轮播区域的时候，停止轮播，鼠标移走的时候，继续播放-->
  <div class="xtx-carousel" @mouseenter="stop" @mouseleave="play">
    <ul class="carousel-body">
      <!--给item添加fade类名，当前图片就会展示出来-->
      <!--动态添加类名，当前项index=循环遍历index的时候展示出来-->
      <li
        class="carousel-item"
        :class="{ fade: currentIndex === index }"
        v-for="(item, index) in slides"
        :key="item.id"
      >
        <RouterLink :to="item.hrefUrl">
          <img :src="item.imgUrl" alt="" />
        </RouterLink>
      </li>
    </ul>
    <a @click="prev" href="javascript:;" class="carousel-btn prev">
      <i class="iconfont icon-angle-left"></i>
    </a>
    <a @click="next" href="javascript:;" class="carousel-btn next"
      ><i class="iconfont icon-angle-right"></i
    ></a>
    <div class="carousel-indicator">
      <span
        @mouseenter="currentIndex = index"
        :class="{ active: currentIndex === index }"
        v-for="(item, index) in slides"
        :key="item.id"
      ></span>
    </div>
  </div>
</template>

<style scoped lang="less">
.xtx-carousel {
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 150px;
  position: relative;

  .carousel {
    &-body {
      width: 100%;
      height: 100%;
    }

    &-item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity 0.5s linear;

      &.fade {
        opacity: 1;
        z-index: 1;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }

    &-indicator {
      position: absolute;
      left: 0;
      bottom: 20px;
      z-index: 2;
      width: 100%;
      text-align: center;

      span {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        cursor: pointer;

        ~ span {
          margin-left: 12px;
        }

        &.active {
          background: #fff;
        }
      }
    }

    &-btn {
      width: 44px;
      height: 44px;
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 228px;
      z-index: 2;
      text-align: center;
      line-height: 44px;
      opacity: 0;
      transition: all 0.5s;

      &.prev {
        left: 20px;
      }

      &.next {
        right: 20px;
      }
    }
  }

  &:hover {
    .carousel-btn {
      opacity: 1;
    }
  }
}
</style>

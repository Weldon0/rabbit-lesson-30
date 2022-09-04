// 封装图片懒加载指令

import { App, Directive } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
import defaultImg from "@/assets/images/200.png";

const lazy: Directive = {
  // value: 调用指令的时候，传入的图片地址
  mounted(el: HTMLImageElement, { value }) {
    const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
      //  isIntersecting可以判断当前dom是否出现在可视区
      if (isIntersecting) {
        stop(); // 停止监听
        el.src = value;
        //  如果地址赋值出错，给一个图片的默认地址
        el.onerror = function () {
          el.src = defaultImg;
        };
      }
    });
  },
};

// 注册指令
export default {
  install(app: App) {
    app.directive("lazy", lazy);
  },
};

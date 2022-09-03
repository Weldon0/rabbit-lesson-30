import XtxSkeleton from '@/components/skeleton/index.vue'
import XtxCarousel from '@/components/carousel/index.vue'
import {App} from "vue";

// 使用插件的方式注册

export default {
  install(app: App) {
    // 注册全局组件
    app.component(XtxSkeleton.name, XtxSkeleton)
    app.component(XtxCarousel.name, XtxCarousel)
  }
}

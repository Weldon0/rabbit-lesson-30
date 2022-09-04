import XtxSkeleton from "@/components/skeleton/index.vue";
import XtxMore from "@/components/more/index.vue";
// 参考：
declare module "vue" {
  export interface GlobalComponents {
    XtxSkeleton: typeof XtxSkeleton;
    XtxMore: typeof XtxMore;
  }
}
export {};

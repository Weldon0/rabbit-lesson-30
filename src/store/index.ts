import useCategory from "@/store/modules/category";
import useHome from "@/store/modules/home";


// 统一注册模块并导出
export default function useStore() {
  return {
    categoryStore: useCategory(),
    homeStore: useHome()
  }
}

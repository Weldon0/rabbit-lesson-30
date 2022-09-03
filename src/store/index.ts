import useCategory from "@/store/modules/category";


// 统一注册模块并导出
export default function useStore() {
  return {
    categoryStore: useCategory()
  }
}

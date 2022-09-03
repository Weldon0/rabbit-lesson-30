import {defineStore} from "pinia";
import request from "@/utils/request";
import {ApiRes, CategoryItem} from "@/types";
import {topCategory} from "@/store/constants";

const defaultCategory = topCategory.map(item => ({name: item}))

const useCategory = defineStore('category', {
  state() {
    return {
      list: defaultCategory as CategoryItem[]
    }
  },
  actions: {
    async getCategory() {
      const res = await request.get<ApiRes<CategoryItem[]>>('/home/category/head')
      // 先给每一个数据添加一个open标识，用来控制当前一级分类对应的二级分类的显示或隐藏
      res.data.result.forEach(item => {
        item.open = false
      })
      this.list = res.data.result
    },
    // 提供两个方法，用于设置open属性
    show(id: string) {
      const currentCategory = this.list.find(item => item.id === id)
      currentCategory!.open = true
    },
    hide(id: string) {
      const currentCategory = this.list.find(item => item.id === id)
      currentCategory!.open = false
    }
  },
})

export default useCategory

import {defineStore} from "pinia";
import {ApiRes, BannerItem} from "@/types";
import request from "@/utils/request";

const useHome = defineStore('home', {
  state() {
    return {
      list: [] as BannerItem[]
    }
  },
  actions: {
    async getBannerList() {
      const res = await request.get<ApiRes<BannerItem[]>>('/home/banner')
      // 获取到轮播图数据赋值给list
      this.list = res.data.result
    }
  }
})

export default useHome

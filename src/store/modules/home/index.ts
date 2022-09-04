import { defineStore } from "pinia";
import { ApiRes, BannerItem, NewGoodItem } from "@/types";
import request from "@/utils/request";

const useHome = defineStore("home", {
  state() {
    return {
      list: [] as BannerItem[],
      newGoodsList: [] as NewGoodItem[],
    };
  },
  actions: {
    async getBannerList() {
      const res = await request.get<ApiRes<BannerItem[]>>("/home/banner");
      // 获取到轮播图数据赋值给list
      this.list = res.data.result;
    },
    //   获取新鲜好物接口
    async getNewGoodsList() {
      const res = await request.get<ApiRes<NewGoodItem[]>>("/home/new");
      this.newGoodsList = res.data.result;
    },
  },
});

export default useHome;

export interface ApiRes<T> {
  code: string;
  msg: string;
  result: T;
}

export interface GoodsItem {
  id: string;
  name: string;
  price: string;
  desc: string;
  picture: string;
}

export interface CategoryItem {
  id: string;
  name: string;
  picture: string;
  open: boolean;
  goods: GoodsItem[];
  children: CategoryItem[];
}

// 定义轮播图数据类型
export interface BannerItem {
  hrefUrl: string;
  id: string;
  imgUrl: string;
  type: string;
}

// 定义新鲜好物数据类型
export interface NewGoodItem {
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  discount?: any;
  orderNum: number;
}

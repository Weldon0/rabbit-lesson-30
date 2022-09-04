// 接口通用数据类型
export interface ApiRes<T> {
  code: string
  msg: string
  result: T
}

export interface GoodsItem {
  id: string
  name: string
  price: string
  desc: string
  picture: string
}

export interface CategoryItem {
  id: string
  name: string
  picture: string
  open: boolean
  goods: GoodsItem[]
  children: CategoryItem[]
}

// 轮播图数据类型
export interface BannerItem {
  hrefUrl: string
  id: string
  imgUrl: string
  type: string
}

// 新鲜好物数据类型
export interface NewGoodItem {
  id: string
  name: string
  desc: string
  price: string
  picture: string
  discount?: any
  orderNum: number
}
// 人气推荐数据类型
export interface HotGoodItem {
  id: string
  picture: string
  title: string
  alt: string
}
// 热门品牌数据类型
export interface BrandItem {
  id: string
  name: string
  nameEn: string
  logo: string
  picture: string
  type?: any
  desc: string
  place: string
}

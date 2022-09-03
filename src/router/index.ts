import {createRouter, createWebHashHistory} from "vue-router";
import Layout from '@/views/layout/index.vue'
import Home from '@/views/home/index.vue'

const router = createRouter({
  history: createWebHashHistory(), // 指定路由模式
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '', // 默认子路由
          component: Home
        },
        {
          path: '/category/:id',
          component: () => import('@/views/category/index.vue')
        },
        {
          path: '/category/sub/:id',
          component: () => import('@/views/category/sub.vue')
        }
      ]
    },
    {
      path: '/login',
      component: () => import('@/views/login/index.vue')
    }
  ]
})

// 导出配置好的路由
export default router

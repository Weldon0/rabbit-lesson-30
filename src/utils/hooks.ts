import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

/**
 * 组件数据懒加载自定义hook: 当组件进入用户可视区的时候再去请求当前组件的数据
 * @param apiFn 数据请求的方法
 */
export function useLazyData(apiFn: () => void) {
  const target = ref(null)
  // 监听组件出现在用户可视区域的时候就可以调用获取数据的方法
  const { stop } = useIntersectionObserver(target, ([{ isIntersecting }]) => {
    if (isIntersecting) {
      stop()
      // 获取数据的方法
      apiFn()
    }
  })
  return target
}

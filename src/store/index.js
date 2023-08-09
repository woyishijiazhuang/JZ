import { createGlobalState, useStorage } from '@vueuse/core'
import { routes } from '@/router'

export const useMenuDefaultActiveState = createGlobalState(() => useStorage('menu-default-active', '/'))

// 去除routes中的component属性,节省性能开销，但是这个函数的递归不能太深，否则也有性能问题
function delComponent(routes) {
    const newRoutes = routes.map(item => {
        return {...item, children: (item.children ? delComponent(item.children) : null), component: null}
    })
    return newRoutes
}

export const useLocalRoutes = createGlobalState(() => useStorage('local-route', delComponent(routes)))
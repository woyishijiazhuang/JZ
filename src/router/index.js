import { createRouter, createWebHistory } from "vue-router"
import HelleWorld from "@/components/HelloWorld.vue"
import EmptyComponent from "@/components/EmptyComponent.vue"
import { useLocalRoutes } from '@/store'
import { ElEmpty, ElMessage } from "element-plus"
// bug：怎么做路由拦截呢？
// item.meta.show == 'must' | true | false => 必须显示不可修改，显示，隐藏
export const routes = [
    { path: "/", name: "主页", meta: { show: 'must' }, component: HelleWorld },
    {
        path: "/show", name: "展示", meta: { show: true }, component: EmptyComponent, children: [
            { path: "clock", name: "时钟一", meta: { show: true }, component: () => import("@/components/show/ClockVue/MyClock.vue") },
            { path: "clock2", name: "时钟二", meta: { show: true }, component: () => import("@/components/show/MyClock2.vue") },
            { path: "rings", name: "5Rings", meta: { show: true }, component: () => import("@/components/show/OlympicRings.vue") }
        ]
    },
    {
        path: "/interaction", name: "互动", meta: { show: true }, component: EmptyComponent, children: [
            { path: "border", name: "边框", meta: { show: true }, component: () => import("@/components/interaction/BorderRadius.vue") },
            { path: "progressCanvas", name: "进度一", meta: { show: true }, component: () => import("@/components/interaction/ProgressCanvas.vue") },
            { path: "progressSvg", name: "进度二", meta: { show: true }, component: () => import("@/components/interaction/ProgressSvg.vue") },
            { path: "book", name: "相册", meta: { show: true }, component: () => import("@/components/interaction/BookVue/MyBook.vue") },
            { path: "konva", name: "画布", meta: { show: true }, component: () => import("@/components/interaction/Konva.vue") }
        ]
    },
    {
        path: "/game", name: "游戏", meta: { show: true }, component: EmptyComponent, children: [
            { path: "test", name: "测试", meta: { show: true }, component: () => import("@/components/game/MyTest.vue") }
        ]
    },
    { path: "/setting", name: "设置", meta: { show: 'must' }, component: () => import('@/components/SettingVue/Setting.vue') }
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

// const localRoutes = useLocalRoutes()
router.beforeEach((to, from) => {
    // 根据to去localRoutes里找到具体信息,一路的meta都为真才能访问到
    let searchRoutes = JSON.parse(localStorage.getItem('local-route'))
    // 这里三行一个正则可以搞定，但是我不会写
    // 正则匹配字符串中第一个字符以外的/
    const pathArr = to.fullPath.split(/\//)
    pathArr.shift()
    pathArr[0] = '/' + pathArr[0]
    while (true) {
        const path = pathArr.shift()
        searchRoutes = searchRoutes.find(item => item.path == path)
        // 一路找，还有可访问子集就继续循环，否则返回真访问to的路径，或者为假,提示，返回当前路径
        if (searchRoutes.children && searchRoutes.meta.show) {
            searchRoutes = searchRoutes.children
        } else if (searchRoutes.meta.show) {
            return true
        } else {
            ElMessage.error('路由错误或权限未开放')
            return '/'
        }
    }
})
export default router
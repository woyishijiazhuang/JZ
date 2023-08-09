
// 设置亮暗模式
export function switchTheme (theme) {
    // 后续增加持久化 监听系统主题自动变化 查询当前主题色 等功能
    switch (theme) {
        case 'light':
            return document.documentElement.classList.remove('dark')
        case 'dark':
            return document.documentElement.classList.add('dark')
        default:
            return document.documentElement.classList.toggle('dark')
    }
}
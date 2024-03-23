import { createApp } from 'vue'

import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import './global.less'
import App from './App.vue'

import { useRegisterSW } from 'virtual:pwa-register/vue';
import VueKonva from 'vue-konva'
import VImg from '@/component/VImg.vue'
useRegisterSW();

const app = createApp(App)
app.use(router)
app.use(ElementPlus, {size: 'default'})
app.use(VueKonva)
app.component('VImg', VImg)
app.mount('#app')

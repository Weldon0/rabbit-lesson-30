import {createApp} from 'vue'
// import './style.css'
import App from './App.vue'
import 'normalize.css'
import '@/assets/styles/common.less'
import {createPinia} from "pinia";
// 引入路由
import router from "@/router";

const app = createApp(App)
const pinia = createPinia()
// 注册路由
app.use(router)
app.use(pinia)
app.mount('#app')


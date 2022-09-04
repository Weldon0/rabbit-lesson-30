import { createApp } from "vue";
// import './style.css'
import App from "./App.vue";
import "normalize.css";
import "@/assets/styles/common.less";
import { createPinia } from "pinia";
import XtxUI from "@/components/index";
// 注册指令
import XtxDirectives from "@/directives/index";
// 引入路由
import router from "@/router";

const app = createApp(App);
const pinia = createPinia();
// 注册路由
app.use(router);
app.use(pinia);
app.use(XtxUI);
app.use(XtxDirectives);
app.mount("#app");

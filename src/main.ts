import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
// 引入svg图标
import './svgIcons'
// 引用elementUI部分组件
import { Button, Select } from 'element-ui'
// 使用组件
Vue.use(Button)
Vue.use(Select)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

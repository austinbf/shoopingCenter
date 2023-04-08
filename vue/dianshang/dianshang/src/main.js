import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from "@/router";
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //注册路由信息，当这里书写router的时候，
  //路由组件都具有了￥router，与￥route属性
  //
  router,
}).$mount('#app')

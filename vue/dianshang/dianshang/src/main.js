import Vue from 'vue'
import App from './App.vue'
import store from "@/store";//注意这里是小写，具体原因不知，但是要注意
//引入路由
import router from "@/router";
//在这里注册全局组件，在之后的使用中就不用再次引入了
import TypeNav from "@/components/TypeNav/index.vue";
Vue.component(TypeNav.name,TypeNav);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //注册路由信息，当这里书写router的时候，
  //路由组件都具有了￥router，与￥route属性
  //
  router,
  //组件的实例的身上，会多一个￥Store的属性
 store
}).$mount('#app')

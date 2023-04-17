import Vue from "vue";
import Vuex from 'vuex';


Vue.use(Vuex);
import home from "./home";
import search from "./search";
export default new Vuex.Store({//注意这里的写法
   modules:{
       home,
       search
   }

})

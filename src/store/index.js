import Vue from "vue";
import Vuex from 'vuex';


Vue.use(Vuex);
import home from "./home";
import search from "./search";
import detail from "@/store/detail";
import shopCart from "@/store/shopCate/shopCart";
import user from "@/store/users/user";
export default new Vuex.Store({//注意这里的写法
   modules:{
       home,
       search,
       detail,
       shopCart,
       user
   }

})

import Vue from 'vue'
import VueRouter from "vue-router";
Vue.use(VueRouter);
import Home from "@/pages/Home"
import Search from "@/pages/Search";
import Login from "@/pages/Login"
import Register from "@/pages/Register";


export default  new VueRouter({
    routes:[
        {  path:'/home',
            component:Home,
            meta:{show:true}
        },//注意这里是没有s的component


        {
            path:'/search/:keyword?',
            component:Search,
            meta:{show:true}
        }
        ,
        {
            path:'/login',
            component:Login,
            meta:{show:false}
        }
        ,
        {
            path:'/register',
            component:Register,
            meta:{show:false}
        }
            ,{
        path:"*",
            redirect:"/home"

        }

    ]

})

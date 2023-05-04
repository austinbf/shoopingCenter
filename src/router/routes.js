import Home from "@/pages/Home/index.vue";
import Detail from "@/pages/Detail/index.vue";
import Search from "@/pages/Search/index.vue";
import Login from "@/pages/Login/index.vue";
import Register from "@/pages/Register/index.vue";

export default [
    {
        path: '/home',
        component: Home,
        meta: {show: true}
    },//注意这里是没有s的component

    {
        path: '/detail/:skuid',
        component: Detail,
        meta: {show: true}
    },

    {
        path: '/Search/:keyword?',
        component: Search,
        meta: {show: true},
        name: 'search'
    }
    ,
    {
        path: '/login',
        component: Login,
        meta: {show: false}
    }
    ,
    {
        path: '/register',
        component: Register,
        meta: {show: false}
    }
    , {
        path: "*",
        redirect: "/home"

    }

]
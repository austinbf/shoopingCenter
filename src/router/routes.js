import Home from "@/pages/Home/index.vue";
import Detail from "@/pages/Detail/index.vue";
import Search from "@/pages/Search/index.vue";
import Login from "@/pages/Login/index.vue";
import Register from "@/pages/Register/index.vue";
import AddCartSuccess from "@/pages/AddCartSuccess/index.vue";
import ShopCart from "@/pages/ShopCart/index.vue";
import Trade from "@/pages/Trade/index.vue";
import Pay from "@/pages/Pay/index.vue";
import PaySuccess from "@/pages/PaySuccess/index.vue";
import Center from "@/pages/Center/index.vue";
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'

export default [
    {
        path: '/home',
        component: Home,
        meta: {show: true}
    },//注意这里是没有s的component
    {
        path: '/center',
        component: Center,
        meta: {show: true},
        children: [{
            path: 'myorder',
            component: MyOrder
        }, {
            path: 'grouporder',
            component: GroupOrder
        },
            {
                path:'/center',
                redirect:'/center/myorder'
            }
        ]
    },
    {
        path: '/paysuccess',
        component: PaySuccess,
        meta: {show: true}
    },
    {
        path: '/pay',
        component: Pay,
        meta: {show: true}
    },
    {
        path: '/trade',
        component: Trade,
        meta: {show: true}
    },
    {
        path: '/shopcart',
        component: ShopCart,
        meta: {show: true},
        name: 'ShopCart'
    },
    {
        path: '/addcartsuccess',
        component: AddCartSuccess,
        meta: {show: true},
        name: 'addcartsuccess'
    },
    {
        path: '/detail/:skuId',
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
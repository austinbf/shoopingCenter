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
        component: ()=>import('@/pages/Home'),
        meta: {show: true}
    },//注意这里是没有s的component
    {
        path: '/center',
        component: ()=>import('@/pages/Center'),
        meta: {show: true},
        children: [{
            path: 'myorder',
            component: ()=>import('@/pages/Center/myOrder')
        }, {
            path: 'grouporder',
            component: ()=>import('@/pages/Center/groupOrder')
        },
            {
                path: '/center',
                redirect: '/center/myorder'
            }
        ]
    },
    {
        path: '/paysuccess',
        component: ()=>import('@/pages/PaySuccess'),
        beforeEnter: (to, from, next) => {
            // reject the navigation
            if (from.path == '/pay') {
                next();
                return true;
            } else {
                next(false)
                return false;
            }

        },
        meta: {show: true}
    },
    {
        path: '/pay',
        component: ()=>import('@/pages/Pay'),
        beforeEnter: (to, from, next) => {
            // reject the navigation
            if (from.path == '/trade') {
                next();
                return true;
            } else {
                next(false)
                return false;
            }

        },
        meta: {show: true}
    },
    {//路由独享守卫

        path: '/trade',
        component: ()=>import('@/pages/Trade'),
        beforeEnter: (to, from, next) => {
            // reject the navigation
            if (from.path == '/shopcart') {
                next();
                return true;
            } else {
                next(false)
                return false;
            }

        },
        meta: {show: true}
    },
    {
        path: '/shopcart',
        component: ()=>import('@/pages/ShopCart'),
        meta: {show: true},
        name: 'ShopCart'
    },
    {
        path: '/addcartsuccess',
        component: ()=>import('@/pages/AddCartSuccess'),
        meta: {show: true},
        name: 'addcartsuccess'
    },
    {
        path: '/detail/:skuId',
        component: ()=>import('@/pages/Detail'),
        meta: {show: true}
    },

    {
        path: '/Search/:keyword?',
        component: ()=>import('@/pages/Search'),
        meta: {show: true},
        name: 'search'
    }
    ,
    {
        path: '/login',
        component: ()=>import('@/pages/Login'),
        meta: {show: false}
    }
    ,
    {
        path: '/register',
        component: ()=>import('@/pages/Register'),
        meta: {show: false}
    }
    , {

        path: "*",
        redirect: "/home"

    }

]
import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter);
import routes from "@/router/routes";
import Home from "@/pages/Home"
import Search from "@/pages/Search";
import Login from "@/pages/Login"
import Register from "@/pages/Register";
import Detail from "@/pages/Detail/index.vue";

let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(
            this,
            location,
            () => {
            },
            () => {
            }
        )
    }
}

VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(
            this,
            location,
            () => {
            },
            () => {
            }
        )
    }
}
export default new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { y: 0 }
    },


})

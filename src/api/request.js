//对于axios进行二次封装
import axios from "axios";
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
//在当前模块中引入仓库
import store from "@/store";
//nprogress的start代表进度条开始，done代表结束
//1.利用axios的对象的方法create创建一个axios实例
const requests = axios.create({
    //配置对象
    baseURL: '/api',
    timeout: 5000,

});
//请求拦截器，在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config) => {
    nprogress.start();
    if (store.state.detail.uuid_token) {
        config.headers.userTempId = store.state.detail.uuid_token;
    }

    if (store.state.user.token) {
        config.headers.token = store.state.user.token;
    }
    return config;

})
//响应拦截器
requests.interceptors.response.use((res) => {
        //成功的响应拦截器
        nprogress.done();
        return res.data;
    },

    (error) => {
        return Promise.reject(new Error('fail'));
    })
//失败的响应拦截器
export default requests;
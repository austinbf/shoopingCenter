//当前这个模块是为了api统一管理
import requests from "@/api/request";
//三级联动的接口
//http://gmall-h5-api.atguigu.cn/api/product/getBaseCategoryList
//get 无参数
export const reqCategoryList = () => {
    //箭头函数可以在程序任意地方使用,箭头函数返回即为服务器的数据
    //下面箭头函数返回值：返回的是什么? promise,即为返回服务器的数据
    //return关键字，千万别忘记书写，如果忘记书写，你在任意地方获取的都是undeinfed
    return requests({ method: 'get', url: '/product/getBaseCategoryList' });
}

//当前这个模块是为了api统一管理
import requests from "@/api/request";
import mockRequests from "@/api/mockAjsx";
import {post} from "axios";
//三级联动的接口
//http://gmall-h5-api.atguigu.cn/api/product/getBaseCategoryList
//get 无参数
//搜索模块的接口
//http://gmall-h5-api.atguigu.cn/api/list
//请求方式：post,有参数
export const reqCategoryList = () => {
    //箭头函数可以在程序任意地方使用,箭头函数返回即为服务器的数据
    //下面箭头函数返回值：返回的是什么? promise,即为返回服务器的数据
    //return关键字，千万别忘记书写，如果忘记书写，你在任意地方获取的都是undeinfed
    return requests({method: 'get', url: '/product/getBaseCategoryList'});
}
export const reqBannerList = () => mockRequests.get('/banner');
export const reqFloorList = () => mockRequests.get('/floor');
export const reqGetSearchInfo = (params) => requests({
    url: '/list',
    method: 'post',
    data: params
})
///api/item/{ skuId }
export const reqGoodsInfo = (skuId) => requests({
    url: `/item/${skuId}`,
    method: 'get'

})
///api/cart/addToCart/{ skuId }/{ skuNum }
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: 'post'
});
///api/cart/cartList,获取购物车列表的接口
export const reqCartList = () => requests({
    url: '/cart/cartList',
    method: 'get'
})
export const reqDeleteCartById = (skuId) => requests({url: `/cart/deleteCart/${skuId}`, method: 'delete'}
)
export const reqUpadateCheakedById=(skuId,isChecked)=>requests({
    url:`/cart/checkCart/${skuId}/${isChecked}`,
    method:'get'
})
export const reqGetCode=(phone)=>requests({
    url:`/user/passport/sendCode/${phone}`,
    method:'get'
})
export const reqUserRegister=(data)=>requests({
    url:'/user/passport/register',data,
    method:'post'
})
export const reqUserLogIn=(data)=>requests({
    url:'/user/passport/login',
    data,
    method:'post'
})
export const reqLogOut=()=>requests({
    url:'/user/passport/logout',
    method:'get'
})
export const reqUserInfo = ()=>requests({url:`/user/passport/auth/getUserInfo`,method:'get'});
export const reqAddressInfo=()=>requests({url:'/user/userAddress/auth/findUserAddressList',method:'get'})
export const reqOrder=()=>requests({url:'/order/auth/trade',method:'get'})
///api/order/auth/submitOrder?tradeNo={tradeNo}
export const reqSubmitOrder=(tradeNo,data)=>requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'})

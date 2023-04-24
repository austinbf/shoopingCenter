

import {reqGetSearchInfo} from "@/api";

const actions = {
async getSearchList({commit},searchParams) {
    //params形参，适当用户触发了action的时候，第二个参数至少是一个空数组
    let result=await reqGetSearchInfo(searchParams);
    if(result.code===200){
        commit('GETSEARCHLIST',result.data);
    }
}
}
const mutations = {
GETSEARCHLIST(state,searchList){
    state.searchList=searchList;
}
}


const state = {
    searchList:{}
}
//在项目中是为了简化仓库中的数据而生,把将来要在组件当中要用的数据简化一下
const getters = {
    goodsList(state){
        //这里的state是指小仓库里的state
        return state.searchList.goodsList||[];
    },
    trademarkList(state){
        return state.searchList.trademarkList||[];
    },
    attrsList(state){
        return state.searchList.attrsList||[];
    }
}
export default ({
    state,
    mutations,
    actions,
    getters,

})

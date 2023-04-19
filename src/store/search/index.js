

import {reqGetSearchInfo} from "@/api";

const actions = {
async getSearchList({commit},params={}) {
    //params形参，适当用户触发了action的时候，第二个参数至少是一个空数组
    let result=await reqGetSearchInfo(params);
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
//在项目中是为了简化仓库中的数据而生
const getters = {}
export default ({
    state,
    mutations,
    actions,
    getters,

})

import {reqBannerList, reqCategoryList, reqFloorList} from "@/api";

const state = {
    categoryList: [],
    //state中的数据依靠vuex中返回的对象的类型而定，根据接口返回的值进行更改
    bannerList: [],
    floorList: []
}
const actions = {
    // <-------------note------------------->
    // 实践中，我们会经常用到 ES2015 的参数解构来简化代码（特别是我们需要调用 commit 很多次的时候）：
    //通过api里面的接口函数，向服务器发请求
    // actions: {
    //     increment ({ commit }) {
    //         commit('increment')
    //     }
    // }
    async categoryList({commit}) {
        let result = await reqCategoryList();
        if (result.code === 200) {
            commit(
                'CATEGORYLIST', result.data
            )
            state.categoryList.length = 16;
        }
    },
    //获取首页轮播图的数据
    async getBannerList({commit}) {
        let result = await reqBannerList();

        if (result.code === 200) {
            commit(
                'BANNERLIST', result.data,
            )

        }
    },
    async getFloorList({commit}) {
        let result = await reqFloorList();
        console.log(result);
        if (result.code === 200) {
            commit(
                'FLOORLIST', result.data,
            )
        }
    }

}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;

    },
    BANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    },
    FLOORLIST(state,floorList)

{
    state.floorList = floorList;
}

}


const getters = {}
export default ({
    state,
    mutations,
    actions,
    getters

})

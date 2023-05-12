import {reqCartList} from "@/api";
import {reqDeleteCartById} from "@/api";
import {reqUpadateCheakedById} from "@/api";

const state = {
    cartList: []
};
const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList;
    }
};
const actions = {
    async getCartList({commit}) {
        let result = await reqCartList();
        if (result.code == 200) {
            commit('GETCARTLIST', result.data);
        }


    },
    async deleteCartById({commit}, skuId) {
        let result = await reqDeleteCartById(skuId);
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject((new Error('fail')))
        }
    },
    async updateCheckedById({commit}, {skuId, isChecked}) {
        let result = await reqUpadateCheakedById(skuId, isChecked);
        if (result.code == 200) {
            return 'ok';
        } else {
            return Promise.reject((new Error('fail')))
        }
    },
    async deleteAllCheckedCart({dispatch, getters}) {
        let PromiseAll = [];
        getters.cartList.cartInfoList.forEach(item => {
            let promise = item.isChecked == 1 ? dispatch('deleteCartById', item.skuId) : '';
            PromiseAll.push(promise);
        })
        return Promise.all(PromiseAll);

    },
    updateAllIsChecked({dispatch,state},isChecked){
        let PromiseAll = [];
        state.cartList[0].cartInfoList.forEach(item=>{
            let promise=dispatch('updateCheckedById',{skuId:item.skuId,isChecked});
            PromiseAll.push(promise);
        })

        return Promise.all(PromiseAll);
    },
};
const getters = {
    cartList(state) {
        return state.cartList[0] || {};
    },

};
export default {
    state,
    mutations,
    actions,
    getters
}
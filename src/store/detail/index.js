import {reqAddOrUpdateShopCart, reqGoodsInfo} from "@/api";
import {getUUID} from '@/utils/uuid_token'
//封装的临时身份的身份模块
const state = {
    goodInfo: {},
    uuid_token:getUUID()

};
const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo;
    },

};
const actions = {
    async getGoodInfo({commit}, skuid) {
        let result = await reqGoodsInfo(skuid)
        {
            if (result.code == 200) {
                commit('GETGOODINFO', result.data);
            }
        }
    },
    async addOrUpdateShopCart({commit}, {skuId, skuNum}) {
        let result = await reqAddOrUpdateShopCart(skuId, skuNum);
        if (result.code == 200) {
            return 'ok'
        } else {
          return  Promise.reject(new Error('fail'))
        }

    }
};
const getters = {
    categoryView(state) {
        return state.goodInfo.categoryView || {};
    },
    skuInfo(state) {
        return state.goodInfo.skuInfo || {};
    },
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList || [];
    }
};
export default {
    state, mutations, actions, getters
}
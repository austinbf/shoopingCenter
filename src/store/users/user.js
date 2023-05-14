import {reqGetCode} from "@/api";
import {reqUserRegister} from "@/api";
import {reqUserLogIn} from "@/api";
import {reqUserInfo} from "@/api";

const state = {
    code: '',
    token: '',
    userInfo: ''
};
const mutations = {
    GETCODENUMBER(state, code) {
        state.code = code;

    },
    USERLOGIN(state, token) {
        state.token = token;
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo;
    }
};
const actions = {
    async getCodeNumber({commit}, phone) {
        let result = await reqGetCode(phone)
        if (result.code == 200) {
            commit('GETCODENUMBER', result.data);


        } else {
            return Promise.reject(Error('fail'))
        }

    },
    async userRegister({commit}, user) {
        let result = await reqUserRegister(user);
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(Error('fail'))
        }


    },
    async UserLogIn({commit}, data) {
        let result = await reqUserLogIn(data)
        if (result.code == 200) {
            commit('USERLOGIN', result.data.token);
            return 'ok'
        } else {
            return Promise.reject(Error('fail'))
        }


    },
    async getUserInfo({commit}) {
        let result = await reqUserInfo();

        commit('GETUSERINFO', result.data);

    }
};
const getters = {
    userName(state) {
        return state.userInfo.name;
    }


};
export default {
    state,
    mutations,
    actions,
    getters
}
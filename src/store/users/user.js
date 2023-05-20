import {reqGetCode, reqLogOut} from "@/api";
import {reqUserRegister} from "@/api";
import {reqUserLogIn} from "@/api";
import {reqUserInfo} from "@/api";
import {setToken} from "@/utils/token";
import {removeToken} from "@/utils/token";
import {isES5Constructor} from "eslint/lib/rules/utils/ast-utils";


const state = {
    code: '',
    token: localStorage.getItem('TOKEN'),
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
    },
    CLEAR(state) {
        state.userInfo = {};
        state.token = '';
        removeToken();
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
            return Promise.reject(Error('fail'));
        }


    },
    async UserLogIn({commit}, data) {
        let result = await reqUserLogIn(data)
        if (result.code == 200) {
            commit('USERLOGIN', result.data.token);
            //持久化存储
            setToken(result.data.token);
            return 'ok'
        } else {
            return Promise.reject(Error('fail'))
        }


    },
    async getUserInfo({commit}) {
        let result = await reqUserInfo();

        commit('GETUSERINFO', result.data);
        return 'ok';


    },
    async userLogOut({commit}) {
        let result = await reqLogOut();
        //actions里面不能操作state
        if (result.code == 200) {
            console.log(123321)
            commit('CLEAR');
            return 'ok'

        } else {
            return Promise.reject(Error('fail'))
        }

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
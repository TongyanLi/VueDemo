import Vue from 'vue'
import Vuex from 'vuex'

//Vuex模块
import moduleA from './modules/moduleA'
import moduleB from './modules/moduleB'

Vue.use(Vuex);

const state = {
    count: 2
};
const getters = {
    count: state => state.count,
};
const mutations = {};
const actions = {};

const store = new Vuex.Store({
    namespaced: true,
    modules:{
        a: moduleA,
        b: moduleB
    },
    state,
    getters,
    mutations,
    actions
});

export default store
const state = {
    count: 0
};
const getters = {
    count(state) {
        return state.count
    },
    evenOrOdd(state) {
        return state.count%2 === 1 ? '奇数' : '偶数'
    },
    plusRootCount(state, getters, rootState){
        return state.count + rootState.count
    }
};
const mutations = {
    increment(state) {
        state.count ++
    },
    decrement(state) {
        state.count --
    }
};
const actions = {
    increment({commit,state}) {
        if( state.count <10 )
            commit('increment')
    },
    decrement(context) {
       context.commit('decrement')
    },
    incrementAsync({commit,state}){
        // 模拟异步操作
        let a = new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, state.count*1000);
        });
        // 3 秒之后提交一次 increment ，也就是执行一次 increment
        a.then(() => {
            commit('increment')
        }).catch(() => {

        })
    }
};

export default{
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
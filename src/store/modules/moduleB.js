const moduleB = {
    namespaced: true,
    state:{
        count: 1
    },
    getters:{
        count(state){
            return state.count
        }
    },
    mutations:{
        increment(state) {
            state.count += 2
        },
        decrement(state) {
            state.count -= 2
        }
    },
    actions:{
        increment(context) {
            context.commit('increment')
        },
        decrement(context) {
            context.commit('decrement')
        }
    }
};

export default moduleB;
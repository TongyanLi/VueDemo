<template>
    <div id="VuexTest">
        <h1>count of moduleA: {{aCount}} is {{evenOrOdd}}</h1>
        <h1>plus root count: {{plusRootCount}}</h1>
        <button @click="incrementA">增一</button>
        <button @click="decrementA">减一</button>
        <button @click="incrementAsyncA">延迟n秒增一</button>
        <h1>count of moduleB:{{bCount}}</h1>
        <button @click="incrementB">增二</button>
        <button @click="decrementB">减二</button>
        <h1>rootCount:{{count}}</h1>
    </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
import store from '../store/index'

export default {
    name: "VuexTest",
    store,
    data(){
        return {
            showCount: this.$store.state.count
        }
    },
    computed:{
        ...mapGetters({
            count: 'count',
            plusRootCount: 'a/plusRootCount',
            aCount: 'a/count',
            bCount: 'b/count',
            evenOrOdd: 'a/evenOrOdd'
        })
    },
    methods:mapActions({
        incrementA: 'a/increment',
        decrementA: 'a/decrement',
        incrementB: 'b/increment',
        decrementB: 'b/decrement',
        incrementAsyncA: 'a/incrementAsync'
    }),
}
</script>

<style scoped>

</style>
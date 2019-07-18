import Vue from 'vue'
import VueRouter from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue'
import VuexTest from '../components/VuexTest.vue'

Vue.use(VueRouter);

const routes = [
    {
        name: 'HelloWorld',
        path: '/helloWorld',
        component: HelloWorld
    },
    {
        name: 'VuexTest',
        path: '/vuexTest',
        component: VuexTest,
        props: true
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router
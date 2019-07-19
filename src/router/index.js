import Vue from 'vue'
import VueRouter from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue'
import ChildRoute from '../components/ChildRoute.vue'
import VuexTest from '../components/VuexTest.vue'

Vue.use(VueRouter);

const routes = [
    {
        name: 'VuexTest',
        path: '/vuexTest',
        component: VuexTest,
        //别名和路由定义顺序有关
        // alias: '/helloWorld',
        props: true
    },
    {
        name: 'HelloWorld',
        path: '/helloWorld',
        component: HelloWorld,
        // redirect: { name: 'VuexTest' },
        children: [
            {
                name: 'ChildRoute',
                path: ':childRoute',
                component: ChildRoute,
                props: true
            }
        ]
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router
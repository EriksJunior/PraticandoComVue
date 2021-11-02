import Home from './views/Home.vue'
import Cliente from './views/Cliente.vue'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
    path: '/',
    component: Home,
},
{
    path: '/cliente',
    component: Cliente,
}
];

const router = new Router({
    mode: 'history',
    routes
})

export default router;
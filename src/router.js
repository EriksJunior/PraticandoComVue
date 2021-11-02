import { createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Cliente from './views/Cliente.vue'
const routes = [{
    path: '/',
    name: 'home',
    component: Home,
},
{
    path: '/Cliente',
    name: 'cliente',
    component: Cliente,
}
];

const router = createWebHistory({ history: createWebHistory(), routes })

export default router;
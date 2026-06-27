import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import ReserveTable from '../pages/ReserveTable.vue';

const routes = [
{ path: '/', name: 'Home', component: Home },
{ path: '/reserve', name: 'ReserveTable', component: ReserveTable }
];

const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes,
});

export default router;
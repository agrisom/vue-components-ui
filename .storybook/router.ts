import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Dashboard',
    redirect: '#',
  }, {
    path: '/',
    name: 'Home',
    redirect: '#',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
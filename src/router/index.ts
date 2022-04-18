import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      requireAuth: false,
      title: '首页',
    },
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
  },
  {
    path: '/404',
    name: '404',
    meta: {
      requireAuth: false,
      title: '404',
    },
    component: () => import(/* webpackChunkName: "404" */ '../views/404.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

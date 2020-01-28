import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/who-am-i',
    name: 'whoami',
    component: () => import('../views/WhoAmI.vue'),
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/Projects.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;

import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Projects from '../views/Projects.vue';
import WhoAmI from '../views/WhoAmI.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/who-am-i',
    name: 'whoami',
    component: WhoAmI,
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects,
  },
];

const router = new VueRouter({
  routes,
});

export default router;

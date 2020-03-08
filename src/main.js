/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

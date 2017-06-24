import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import { routes } from './routes';

require('./sass/variables.sass');
require('bulma/bulma.sass');
require('font-awesome/scss/font-awesome.scss');

Vue.use(Router);

const router = new Router({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
});

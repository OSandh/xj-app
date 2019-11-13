import Vue from 'vue'
import VueRouter from 'vue-router'
import Routes from './routes.js'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(VueRouter);
Vue.use(VueAxios, axios)

const xjRouter = new VueRouter({
  routes: Routes,
  mode: 'history',
});

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: xjRouter
}).$mount('#app')

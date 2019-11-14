import Vue from 'vue'
import VueRouter from 'vue-router'
import Routes from './routes.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'material-design-icons-iconfont';


Vue.use(VueRouter);
Vue.use(VueAxios, axios)

const router = new VueRouter({
  routes: Routes,
  mode: 'history',
});

export const eventBus = new Vue();

import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  vuetify,
  router: router
}).$mount('#app')

import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './routes'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'material-design-icons-iconfont'
import api from './api.js'

// Vuex store
import store from './store'

Vue.use(VueAxios, axios)

export const eventBus = new Vue()

import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  data() {
    return {
      user: {
        name: 'Dormy Örebro'
      }
    }
  },
  
  render: h => h(App),
  vuetify,
  router,
  store,
  api,
}).$mount('#app')


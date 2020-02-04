import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home.vue'
import Storeview from './views/StoreView.vue'
import Testing from './views/Testing.vue'
import Login from './views/Login.vue'

import store from './store';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    meta: { requiresAuth: false },
    children: [
        {
          path: '',
          component: Storeview,
          meta: { requiresAuth: true }
        },
        {
          path: 'logout',
          name: 'logout',
          component: Login,
          meta: { requiresAuth: true }
        },
        {
          path: 'test',
          name: 'test',
          component: Testing,
          meta: { requiresAuth: true }
        },
        {
          path: 'settings',
          component: Storeview,
          meta: { requiresAuth: true }
        },
        {
          path: 'store',
          component: Storeview,
          meta: { requiresAuth: true }
        },
    ] 
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { requiresAuth: false }
  },
]

const router = new VueRouter({
  routes,
 // mode: 'history',
})



const onAuthRequired = async (to, from, next) => {
  var isAuthed = store.getters['user/isAuthenticated']

  if(to.matched.some(record => record.meta.requiresAuth) && !isAuthed) {
    next({name:'login'})
  } else {
    next()
  }
}

router.beforeEach(onAuthRequired)

export default router
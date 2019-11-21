import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from './views/Dashboard.vue'
import Storeview from './views/StoreView.vue'
import Testing from './views/Testing.vue'
import Login from './views/Login.vue'

import store from './store';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/dashboard/*',
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { requiresAuth: false }
  },
  {
    path: '/test',
    name: 'test',
    component: Testing,
    meta: { requiresAuth: true }
  },
  {
    path: '/dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/settings',
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/store',
    component: Storeview,
    meta: { requiresAuth: true }
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})



const onAuthRequired = async (to, from, next) => {
  var isAuth = store.getters['user/isAuthenticated']
  console.log(isAuth)
  if(to.matched.some(record => record.meta.requiresAuth) && !isAuth) {
    next({name:'login'})
  } else {
    next()
  }
}

router.beforeEach(onAuthRequired)

export default router
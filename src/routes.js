import Dashboard from './views/Dashboard.vue';
import Storeview from './views/StoreView.vue';
import Testing from './views/Testing.vue';

export default [
  {
    path: '/',
    component: Dashboard
  },
  {
    path: '/test',
    component: Testing
  },
  {
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '/settings',
    component: Dashboard
  },
  {
    path: '/store',
    component: Storeview
  },
]
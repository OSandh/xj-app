import Dashboard from './views/Dashboard.vue';
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
  }
]
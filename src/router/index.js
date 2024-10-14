import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/views/LoginPage.vue';
import HomePage from '@/views/HomePage.vue';
import RegisterPage from '@/views/RegisterPage.vue';
import HandsPage from '@/views/HandsPage.vue';

function isAuthenticated() {
  const token = localStorage.getItem('token');
  return !!token;
}

const routes = [
  { path: '/auth/login', component: LoginPage, name: 'login' },
  { path: '/register', component: RegisterPage, name: 'register' },
  {
    path: '/home',
    component: HomePage,
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next();
      } else {
        next('/auth/login');
      }
    },
    name: 'home',
  },
  {
    path: '/',
    redirect: '/home', // Redirects '/' to '/home'
  },
  {
    path: '/hands',
    component: HandsPage,
    name: 'hands',
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

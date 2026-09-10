import { createRouter, createWebHistory } from 'vue-router'
import AvantiHomePage from './pages/avanti_home_page.vue'
import AvantiProfiloPage from './pages/avanti_profilo_page.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AvantiHomePage,
    },
    {
      path: '/profilo',
      name: 'profilo',
      component: AvantiProfiloPage,
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router

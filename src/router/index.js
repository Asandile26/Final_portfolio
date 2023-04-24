import { createRouter, createWebHistory } from 'vue-router'
import singlepage from '@/views/SinglePageView.vue'



const routes = [
  {
    path: '/',
    name: 'singlePage',
    component: singlepage
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

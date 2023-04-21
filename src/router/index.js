import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import ResumeComp from '../components/ResumeComp.vue'
import SkillsComp from '../components/SkillsComp.vue'
import ProjectsComp from '../components/ProjectsComp.vue'
import TestimonialsComp from '../components/TestimonialsComp.vue'
import ContactComp from '../components/ContactComp.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HelloWorld
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/AboutComp.vue')
  },
  {
    path: '/resume',
    name: 'resume',
    component: ResumeComp
  },
  {
    path: '/skills',
    name: 'skills',
    component: SkillsComp
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsComp
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: TestimonialsComp
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactComp
  }
  
   
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

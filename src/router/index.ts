import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Timer from '../views/Timer.vue'


const routes = [

  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/timer',
    name: 'timer',
    component: Timer
  }
]

const router = createRouter({
  history: createWebHistory(''),
  routes
})

export default router

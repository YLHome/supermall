import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home/home'

Vue.use(VueRouter)
const category = () => import('../views/category/category.vue');
const car = () => import('../views/car/car.vue');
const profile = () => import('../views/profile/profile.vue');
const routes = [
  {
    path : '',
    redirect : '/home'
  },
  {
    path : '/home',
    component : home
  },
  {
    path : '/category',
    component : category
  },
  {
    path : '/car',
    component : car
  },
  {
    path : '/profile',
    component : profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

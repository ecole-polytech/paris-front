import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }/*,
  {
    path: '/viewProfiles',
    name: 'ViewProfiles',
    component: () => import('../views/ViewProfiles.vue')
  },
  {
    path: '/relations',
    name: 'Relations',
    component: () => import('../views/Relations.vue')
  },
  {
    path: '/myProfile',
    name: 'MyProfile',
    component: () => import('../views/MyProfile.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/About.vue')
  }*/
]

const router = new VueRouter({
  routes
})

export default router

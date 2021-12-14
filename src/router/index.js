import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ViewProfiles from "@/views/ViewProfiles";
import MyProfile from "@/views/MyProfile";
import Relations from "@/views/Relations";
import About from "@/views/About";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ViewProfiles',
    component: ViewProfiles
  },
  {
    path: '/Relations',
    component: Relations
  },
  {
    path: '/MyProfile',
    component: MyProfile
  },
  {
    path: '/About',
    component: About
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Workers from '../views/Workers.vue'
import Login from '../components/Login.vue'
import Secure from '../components/Secure.vue'
import WorkerUser from '../components/WorkerUser.vue'
import Profile from '../components/Profile.vue'
import EditProfile from '../components/EditProfile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/secure',
    name: 'secure',
    component: Secure,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/workers',
    name: 'workers',
    component: Workers
  },
  {
    path: '/workerUser/:id',
    name: 'workerUser',
    component: WorkerUser
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/editProfile',
    name: 'editProfile',
    component: EditProfile
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('token')) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})
export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Workers from '../views/Workers.vue'
import Login from '../views/Login.vue'
import WorkerUser from '../views/WorkerUser.vue'
import Profile from '../views/Profile.vue'
import EditProfile from '../views/EditProfile.vue'
import RecoveryPass from '../views/RecoveryPass.vue'

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
    component: Login,
    meta: {
      guest: true
    }
  },
  {
    path: '/workers',
    name: 'workers',
    component: Workers,
    meta: {
      requiredAuth: true
    }
  },
  {
    path: '/workerUser/:id',
    name: 'workerUser',
    component: WorkerUser,
    meta: {
      requiredAuth: true
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {
      requiredAuth: true
    }
  },
  {
    path: '/editProfile',
    name: 'editProfile',
    component: EditProfile,
    meta: {
      requiredAuth: true
    }
  },
  {
    path: '/recoveryPass',
    name: 'recoveryPass',
    component: RecoveryPass,
    meta: {
      requiredAuth: true
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.guest && localStorage.getItem('token')) {
    next('/')
  } else if (to.meta.requiredAuth && !localStorage.getItem('token')) {
    next('/login')
  } else {
    next()
  }
})

export default router

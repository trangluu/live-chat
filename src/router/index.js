import { createRouter, createWebHistory } from 'vue-router'
import { VueCookieNext } from 'vue-cookie-next';

import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom.vue'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    meta: {
      isPublic: true
    }
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const accessToken = VueCookieNext.getCookie('accessToken')
  if (to.meta.isPublic === true) {
    next()
  } else {
    if (accessToken) {
      next()
    } else {
      next({ name: 'Welcome'})
    }
  }
})

export default router

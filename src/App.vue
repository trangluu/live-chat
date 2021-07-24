<template>
  <router-view/>
</template>

<script>
import { ref, provide } from "vue"
import { useRouter } from 'vue-router'
import { VueCookieNext } from 'vue-cookie-next';
import { projectAuth } from './firebase/config'

export default {
  setup() {
    const router = useRouter()

    const user = ref(projectAuth.currentUser)
    const globalMethods = {
      logout: async () => {
        try {
          await projectAuth.signOut()
          VueCookieNext.removeCookie('accessToken')
          router.push({ name: 'Welcome' })
        } catch(err) {
          console.log(err.message)
        }
      }
    }

    projectAuth.onAuthStateChanged(_user => {
      console.log('User state change. Current user is: ', _user)
      user.value = _user
    })

    provide('user', user)
    provide('globalMethods', globalMethods)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="display name" v-model="state.displayName">
    <input type="email" required placeholder="email" v-model="state.email">
    <input type="password" required placeholder="password" v-model="state.password">
    <div class="error">{{ error }}</div>
    <button>Sign up</button>
  </form>
</template>

<script>
import { reactive, ref } from 'vue'
import { VueCookieNext } from 'vue-cookie-next'
import useSignup from '../composables/useSignup'

export default {
  setup(props, context) {
    const { error, signup } = useSignup()

    const state = reactive({
      displayName: '',
      email: '',
      password: ''
    })

    const handleSubmit = async () => {
      const user = await signup(state.email, state.password, state.displayName)
      if (!error.value) {
        const accessToken = 'bearer' + user.user.refreshToken
        VueCookieNext.setCookie('accessToken', accessToken)

        context.emit('signup')
      }
    }

    return { state, handleSubmit, error }
  }
}
</script>

<style>
</style>
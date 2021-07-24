<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="email" v-model="state.email">
    <input type="password" required placeholder="password" v-model="state.password">
    <div class="error">{{ error }}</div>
    <button>Log in</button>
  </form>
</template>

<script>
import { reactive } from 'vue'
import useLogin from '../composables/useLogin'

export default {
  setup(props, context) {
    const state = reactive({
      email: '',
      password: ''
    })

    const { error, login  } = useLogin()

    const handleSubmit = async () => {
      await login(state.email, state.password)
      if (!error.value) {
        context.emit('login')
      }
    }

    return { state, handleSubmit, error }
  }
}
</script>

<style>
</style>

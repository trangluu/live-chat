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
import useSignup from '../composables/useSignup'

export default {
  setup() {
    const { error, signup } = useSignup()

    const state = reactive({
      displayName: '',
      email: '',
      password: ''
    })

    const handleSubmit = async () => {
      await signup(state.email, state.password, state.displayName)
      console.log('user signed up')
    }

    return { state, handleSubmit, error }
  }
}
</script>

<style>
</style>
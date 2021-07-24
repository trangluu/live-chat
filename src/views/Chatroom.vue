<template>
  <div class="container">
    <Navbar
      :user="user"
      @logout="globalMethods.logout()"
    />
  </div>
</template>

<script>
import { inject } from 'vue'
import Navbar from '../components/Navbar.vue'

export default {
  components: { Navbar },
  setup() {
    const user = inject('user')
    const globalMethods = inject('globalMethods')

    return { 
      user,
      globalMethods
    }
  }
}
</script>
<style>

</style>

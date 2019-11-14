<template lang="pug">
  div.home
    form(class="login" @submit.prevent="handleLogin").auth
      h1 Sign in
      label.auht__lebel Email
      input(required v-model="email" type="email" placeholder="Email").nameField
      label.auht__lebel  Password
      input(required v-model="password" type="password" placeholder="Password").auth__input
      button(type="submit").button--round.button--big.button-primary  Login
</template>

<script>
import '../stylesheet/style__login.scss'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapState({
      auth: state => state.auth.user
    })
  },
  methods: {
    ...mapActions('auth', [
      'login'
    ]),
    handleLogin: function () {
      const email = this.email
      const password = this.password
      this.login({ email, password })
        .then(() => this.$router.push('/'))
        .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>

</style>

<template lang="pug">
  div.homePage
    form(class="login" @submit.prevent="handleLogin").auth
      h1 Login page
      label.auht__lebel Email
      input(required v-model="form.email" type="email" placeholder="Email").auth__input
      label.auht__lebel  Password
      input(required v-model="form.password" type="password" placeholder="Password").auth__input
      button(type="submit").auth__button Login
</template>

<script>
import '../stylesheet/style__login.scss'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
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
    handleLogin () {
      this.login(this.form)
        .then(() => this.$router.push('/'))
        .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
  h1{
    text-align: center;
    line-height: 1.5;
    font-size: 29px;
    line-height: 4.5;
  }
  .recoveryButton{
    margin-top: 20px;
  }
</style>

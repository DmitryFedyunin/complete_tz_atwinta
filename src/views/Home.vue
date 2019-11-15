<template lang="pug">
  div(v-if="token").row.grid-center
    h1.col-xs-12.title.ui-title-4 Тестовое задание
    span.ma-2
      button(@click="handleLogout").auth__button Logout
</template>

<script>
import '../stylesheet/home__page.scss'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'home',
  computed: {
    ...mapState({
      token: state => state.auth.token
    })
  },
  methods: {
    ...mapActions('auth', [
      'logout'
    ]),
    handleLogout () {
      this.logout()
        .then(() => {
          this.$router.push('/login')
        })
    }
  }
}
</script>
<style scoped>
</style>

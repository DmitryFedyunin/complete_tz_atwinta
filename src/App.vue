<template lang="pug">
  div(id="app").wrapper
    div.container
      div.navbar-content
        template(v-if="token")
          router-link(to="/") Главная
          router-link(to="/workers") Сотрудники
          router-link(to="/profile") Профиль
        router-link(v-else to="/login") Войти
      div.content-wrapper.wrapper
        router-view
</template>

<script>
import 'uimini'
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      token: state => state.auth.token
    }),
    ...mapActions('auth', [
      'setUser'
    ])
  },
  mounted () {
    if (localStorage.token) {
      this.setUser
        .catch(err => {
          console.log(err)
          this.$router.push('/login')
        })
    }
  }
}
</script>

<style lang="scss">
  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  body{
    background-color: #f5f5f5;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>

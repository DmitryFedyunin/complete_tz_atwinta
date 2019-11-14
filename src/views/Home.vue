<template lang="pug">
  div.row.grid-center
    h1.col-xs-12.title.ui-title-4 Home Page
    span(v-if="token").ma-2
      button(@click="handleLogout").button-primary Logout
</template>

<script>
import '../stylesheet/home__page.scss'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'home',
  computed: {
    ...mapState({
      token: state => state.auth.token
    }),
    ...mapActions('auth', [
      'logout'
    ])
  },
  methods: {
    handleLogout: function () {
      this.logout()
        .then(() => {
          this.$router.push('/login')
        })
    }
  }
}
</script>

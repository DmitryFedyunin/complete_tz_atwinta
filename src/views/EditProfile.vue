<template lang="pug">
  div.homePage
    form(type="submit" v-if="user").auth
      label.auht__lebel Имя
      input(required v-model="form.name" type="text").auth__input
      label.auht__lebel Email
      input(required v-model="form.email" type="email").auth__input
      label.auht__lebel  Город
      input(required v-model="form.city" type="text" ).auth__input
      label.auht__lebel  Телефон
      input(required v-model="form.phone" type="text").auth__input
      label.auht__lebel  Дата рождения
      input(required v-model="moment(form.birthday).format('MM-DD-YYYY')" type="text").auth__input
      button(type="submit" v-on:click="handleSubmit").auth__button  Edit
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'EditProfile',
  data: () => ({
    form: {
      email: '',
      city: '',
      phone: '',
      name: '',
      birthday: ''
    }
  }),
  mounted () {
    if (this.user) {
      this.syncForm()
    }
  },
  methods: {
    ...mapActions('auth', [
      'editProfileUser'
    ]),

    syncForm () {
      this.form = {
        email: this.user.email,
        phone: this.user.phone,
        birthday: this.user.birthday,
        name: this.user.name,
        city: this.user.city
      }
    },

    handleSubmit () {
      this.editProfileUser(this.form)
        .then(() => {
          this.$router.push('/profile')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  computed: {
    ...mapState({
      user: state => state.auth.user
    })
  },
  watch: {
    user (value, oldValue) {
      if (value.id !== oldValue) {
        this.syncForm()
      }
    }
  }
}
</script>

<style scoped>

</style>

<template lang="pug">
  v-container(fluid)
    v-row
      v-col(v-if="auth")
        v-card
          v-card-title {{ auth.name }}
          v-divider
          v-list(dense)
            v-list-item
              v-list-item-content Email: {{ auth.email }}
            v-list-item
              v-list-item-content Др: {{ moment(auth.birthday).format('MM-DD-YYYY') }}
            v-list-item
              v-list-item-content Город: {{ auth.city }}
            v-list-item
              v-list-item-content Телефон: {{ auth.phone }}
            v-list-item
              v-list-item-content Направление: {{ auth.type }}
        div.profile_btn
          v-btn(to="/editProfile") Изменить
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Profile',
  computed: {
    ...mapState({
      auth: state => state.auth.user
    })
  }
}
</script>
<style lang="scss" scoped>
.profile_btn {
  margin-top: 20px;
}
</style>

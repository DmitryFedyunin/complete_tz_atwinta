<template lang="pug">
  v-container(fluid)
    v-row
      v-col(v-if="user")
        v-card
          v-card-title {{ user.name }}
          v-divider
          v-list(dense)
            v-list-item
              v-list-item-content Email: {{ user.email }}
            v-list-item
              v-list-item-content Др: {{ moment(user.birthday).format('MM-DD-YYYY') }}
            v-list-item
              v-list-item-content Город: {{ user.city }}
            v-list-item
              v-list-item-content Телефон: {{ user.phone }}
            v-list-item
              v-list-item-content Направление: {{ user.type }}
        div.profile_btn
          v-btn(to="/editProfile") Изменить
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Profile',
  computed: {
    ...mapState({
      user: state => state.auth.user
    })
  }
}
</script>
<style lang="scss" scoped>
.profile_btn {
  margin-top: 20px;
}
</style>

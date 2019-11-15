<template lang="pug">
  div(v-if="token")
    h2.ui-title-4.title-page   Сотрудники
    div(v-if="workers === 0") Загрузка...
    v-container(fluid)
      v-row
        v-col(
          v-for="worker in workers.list"
          :key="worker.id"
          cols="12"
          sm="6"
          md="4"
          lg="3")
          v-card
            v-card-title
              v-list-item-content
                v-img(:src="worker.image")
            v-divider
            v-list(dense)
              v-list-item
                v-list-item-content.align-end {{ worker.name }}
                  v-list-item
                    v-card-actions
                      v-btn(text :to="`/workerUser/${worker.id}`") Смотреть профиль
      div
        v-container
          v-row(justify="center")
            v-container(class="max-width")
              div.text-center
                v-pagination(
                  :value="workers.current_page"
                  @input="handlePageChange"
                  :length="9"
                  circle
                ).my-4
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'workersList',
  mounted () {
    this.request()
  },
  computed: {
    ...mapState({
      workers: state => state.workers.workers,
      token: state => state.auth.token
    })
  },
  methods: {
    ...mapActions('workers', [
      'getWorkers'
    ]),
    request (page = 1) {
      this.getWorkers(page)
        .catch(err => {
          console.log(err)
        })
    },
    handlePageChange (page) {
      this.request(page)
    }
  }
}
</script>
<style lang="scss" scoped>
  .title-page{
    text-align: center;
  }
</style>

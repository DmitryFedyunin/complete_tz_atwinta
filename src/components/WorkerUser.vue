<template lang="pug">
  div.worker_input
    div(v-if='worker')
      v-card(max-width="400").mx-auto
        v-img(
          :src="worker.image"
          height="200px")
        v-card-title {{ worker.name }}
        v-card-text Login: {{ worker.login }}
        v-card-text Email: {{ worker.email }}
        v-card-text О себе: {{ worker.about }}
        v-card-text Зачислен: {{ worker.worker.adopted_at }}
        v-card-text Отдел: {{ worker.worker.department }}
        v-card-text Должность: {{ worker.worker.position }}
        v-card-actions
          v-btn(text to="/workers") Назад
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'WorkerUser',
  computed: {
    ...mapState({
      worker: state => state.workers.workerUser
    })
  },
  mounted () {
    this.request()
  },
  methods: {
    ...mapActions('workers', [
      'getWorkersUser'
    ]),
    request (id = this.$route.params.id) {
      this.getWorkersUser(id)
        .catch(err => {
          console.log(err)
        })
    }
  }
}

</script>

<style lang="scss" scoped>
  .worker_input {
    display: flex;
    justify-content: center;
  }
</style>

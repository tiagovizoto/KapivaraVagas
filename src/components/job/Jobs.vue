<template lang="html">
  <div class="column is-10 is-offset-1">
    <div class="title">Confira as vagas que estão esperando por você!</div>
    <div class="field">
      <p class="control">
        <input class="input is-medium" v-model="search" @keyup.enter="muahaha()" type="text" placeholder="Digite sua Busca e pressione Enter">
      </p>
    </div>
    <div v-if="this.jobs.length > 0">
      <div class="limit-class">
        <div class="card">
          <div class="card-content">
            <div class="content">
              <div class="row">
              <div class="subtitle">
                  fkfkfkfk
              </div>
              </div>

              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br>
              <small>11:09 PM - 1 Jan 2016</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h2 class="title">Não há vagas!</h2>
      <img src="../../assets/14762.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Jobs',
  data () {
    return {
      jobs: [],
      search: ''
    }
  },
  computed: {
    muahaha: function () {
      alert(this.search)
    }
  }
}
</script>

<style lang="css">
</style>

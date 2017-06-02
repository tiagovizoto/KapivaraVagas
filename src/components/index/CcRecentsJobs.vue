<template lang="html">
  <div class="column is-6 is-half is-offset-one-quarter">
    <div class="level-item has-text-centered">
      <h2 class="title">Vagas Recentes</h2>
    </div>
    <div v-for="j in jobs">
      <div class="limit-class">
        <div class="card">
          <div class="card-content">
            <div class="content">
              <p class="subtitle">
                <a @click="recentJob()"></a>{{ j.title }} - {{ j.location }}
              </p>
              {{ j.description }}
              <br>
              <small>11:09 PM - 1 Jan 2016</small>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CcRecentsJobs',
  data () {
    return {
      jobs: [
        {title: 'Programmer Python Senior', description: 'lddlfk sjkldhj akdj', location: 'Curitiba-PR'},
        {title: 'Programmer Python Senior', description: 'lddlfk sjkldhj akdj', location: 'Curitiba-PR'},
        {title: 'Programmer Python Senior', description: 'lddlfk sjkldhj akdj', location: 'Curitiba-PR'},
        {title: 'Programmer Python Senior', description: 'lddlfk sjkldhj akdj', location: 'Curitiba-PR'},
        {title: 'Programmer Python Senior', description: 'lddlfk sjkldhj akdj', location: 'Curitiba-PR'}
      ]
    }
  },
  created () {
    axios.get('http://127.0.0.1:5000/jobs/').then((response) => {
      console.log(response)
    })
  }
}
</script>

<style lang="css" scoped>
  .level-item{
    padding-top: 2%
  }
  .limit-class{
    padding-top: 3%
  }
  .column{

  }
</style>

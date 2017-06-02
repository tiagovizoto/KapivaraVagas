<template>
  <div id="app">
    <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <CcHeard></CcHeard>
    <div class="sei">
      <router-view></router-view>
    </div>
    <CcFooter></CcFooter>
  </div>
</template>

<script>
import CcIndex from './components/index/Index'
import CcRecentsJobs from './components/index/CcRecentsJobs.vue'
import CcFooter from './components/base/CcFooter.vue'
import CcHeard from './components/base/CcHeard.vue'

export default {
  name: 'app',
  components: {
    CcIndex,
    CcRecentsJobs,
    CcFooter,
    CcHeard
  }
}
</script>

<style>
.sei{
  background-color: #F5F5F5;
  padding-top: 5%;
  padding-bottom: 5%
}
</style>

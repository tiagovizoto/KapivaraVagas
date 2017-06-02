import Vue from 'vue'
import App from './App'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import VueRouter from 'vue-router'
import CcNewJob from './components/job/CcNewJob.vue'
import Jobs from './components/job/Jobs.vue'

import CcRecentsJobs from './components/index/CcRecentsJobs.vue'

Vue.use(Buefy)
Vue.use(VueRouter)
Vue.config.productionTip = false

/* eslint-disable no-new */
const routes = [
  { path: '/job/new', component: CcNewJob },
  { path: '/jobs', component: Jobs },
  { path: '/', component: CcRecentsJobs }
]

const router = new VueRouter({
  routes // short for routes: routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

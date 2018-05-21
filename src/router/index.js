import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Balances from '@/pages/Balances'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/balances', name: 'balances', component: Balances }
  ]
})

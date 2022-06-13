import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Recomend from '@/pages/recomend'
import Myhome from '@/pages/myhome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },

    {
      path: '/recomend',
      name: 'Recomend',
      component: Recomend
    },

    {
      path: '/myhome',
      name: 'Myhome',
      component: Myhome
    }
  ]
})

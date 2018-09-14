import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import History from '@/components/about/History'
import Cadre from '@/components/about/Cadre'
import Events from '@/components/event/Events'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/cadre/:term?/:member?',
      name: 'Cadre',
      component: Cadre
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    }
  ]
})

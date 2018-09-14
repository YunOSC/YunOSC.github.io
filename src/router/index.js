import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import History from '@/components/about/History'
import Cadre from '@/components/about/Cadre'
import LightningTalk from '@/components/lesson/LightningTalk'
import Events from '@/components/event/Events'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      components: {
        Index: Index
      }
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
      path: '/lt',
      name: 'LightningTalk',
      component: LightningTalk
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    }
  ]
})

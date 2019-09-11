import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ChouQian from '@/components/ChouQian'
import test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/chouqian',
      name: 'ChouQian',
      component: ChouQian
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})

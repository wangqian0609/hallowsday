import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import welcome from '@/pages/index'
import Home from '@/pages/home'
import Story from '@/pages/storys'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component:welcome
    },
    {
      path: '/Home/:user',
      name: 'Home',
      component: Home
    },
    {
      path:'/Story',
      name:'Story',
      component:Story
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home.vue'
import HelloWorld from '../components/hello/HelloWorld.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'home' }
    },
    {
      name: 'home',
      path: '/home',
      component: Home
    },
    {
      name: 'hello',
      path: '/hello',
      component: HelloWorld
    }
  ]
})

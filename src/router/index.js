import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/pages/home.vue'], resolve),
      // children: [
      //   {
      //     path: '/nav',
      //     name: 'nav',
      //     component: resolve => require(['@/components/HelloWorld.vue'], resolve),
      //     meta: {title: 'nav'}
      //   },
      // ]
    },
    {
      path: '/nav',
      name: 'nav',
      component: resolve => require(['@/components/HelloWorld.vue'], resolve),
    }
  ]
})

export default router

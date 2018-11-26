import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'HelloWorld', component: () => import('@/components/book/index')}
    // {path: '/test', name: 'Test', component: () => import('@/components/book/index')}
  ]
})

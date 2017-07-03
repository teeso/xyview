import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import preview from '@/components/preview'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{
      path: '/preview',
      name: 'preview',
      component: preview
    }
  ]
})

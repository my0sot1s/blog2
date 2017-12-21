import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import About from '@/components/About'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[
        {
          path: '/about',
          name: 'about',
          component: About
        }
      ]
    }
  ]
})

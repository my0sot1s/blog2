import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Blog from '@/components/Blog'
import Post from '@/components/Post'
import Pin from '@/components/Pin'
import Upload from '@/components/Upload'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/',
          name: 'Index.blank'
        },
        {
          path: '/about',
          name: 'Index.about',
          component: About,
          meta: {
            effect: 'animateright',
            title: 'About | Te Nguyen'
          }
        },
        {
          path: '/skills',
          name: 'Index.skills',
          component: Skills,
          meta: {
            effect: 'animatetop',
            title: 'Skills | Te Nguyen'
          }
        },
        {
          path: '/contact',
          name: 'Index.contact',
          component: Contact,
          meta: {
            effect: 'animateleft',
            title: 'Contact | Te Nguyen'
          }
        },
        {
          path: '/blog',
          name: 'Index.blog',
          component: Blog,
          meta: {
            effect: 'bounceIn',
            title: 'Blog | Te Nguyen'
          }
        },
        {
          path: '/post/:id',
          name: 'Index.post',
          component: Post,
          meta: {
            effect: 'bounceIn',
            title: 'Post | Te Nguyen'
          }
        },
        {
          path: '/pin',
          name: 'Index.pin',
          component: Pin,
          meta: {
            effect: 'bounceIn',
            title: 'Pin | Te Nguyen'
          }
        },
        {
          path: '/upload',
          name: 'Index.upload',
          component: Upload,
          meta: {
            effect: 'animateleft',
            title: 'Uploaded | Te Nguyen'
          }
        }
      ]
    }
  ]
})

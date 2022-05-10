import Vue from 'vue'
import Router from 'vue-router'

import Home from '~/components/Home'
import Gallery from '~/components/Gallery'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/gallery/digital',
        component: Gallery,
      },
      {
        path: '/gallery/traditional',
        component: Gallery,
      },
      {
        path: '/gallery/photo',
        component: Gallery,
      },
      {
        path: '/gallery/anthro',
        component: Gallery,
      }
    ]
  })
}

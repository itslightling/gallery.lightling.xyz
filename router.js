import Vue from 'vue'
import Router from 'vue-router'

import Home from '~/components/Home/Home'
import Gallery from '~/components/Gallery/Gallery'

Vue.use(Router)

Vue.directive('focus', {
  inserted(el) {
    el.focus()
  },
})

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Home,
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
      },
    ],
  })
}

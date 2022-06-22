import Vue from 'vue'
import Router from 'vue-router'

import Home from '~/components/Home/Home'
import Gallery from '~/components/Gallery/Gallery.vue'

Vue.use(Router)

/* istanbul ignore next */
Vue.directive('focus', {
  inserted (el) {
    el.focus()
  },
})

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Home,
      },
      {
        path: '/gallery/:target',
        component: Gallery,
      },
    ],
  })
}

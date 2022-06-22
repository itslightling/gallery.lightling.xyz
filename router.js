import Vue from 'vue'
import Router from 'vue-router'

import Home from '~/components/Home/Home'

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
    ],
  })
}

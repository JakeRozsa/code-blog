import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Dictionary from './views/Dictionary.vue'
import Challenges from './views/Challenges.vue'
import Guides from './views/Guides.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/dictionary',
      name: 'dictionary',
      component: Dictionary
    },
    {
      path: '/challenges',
      name: 'challenges',
      component: Challenges
    },
    {
      path: '/guides',
      name: 'guides',
      component: Guides
    }
  ]
})

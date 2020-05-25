import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Services from './views/Services.vue'
import Realisations from './views/Realisations.vue'
import Coop from './views/Coop.vue'
import Contact from './views/Contact.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home2',
      component: Home
    },
    {
      path: '/strona główna',
      name: 'home2',
      component: Home
    },
    {
      path: '/zakres usług',
      name: 'services',
      component: Services
    },
    {
      path: '/współpraca',
      name: 'Coop',
      component: Coop
    },
    {
      path: '/realizacje',
      name: 'Realisations',
      component: Realisations
    },
    {
      path: '/kontakt',
      name: 'Contact',
      component: Contact
    },    
    {
      path: '*', redirect: '/',
    }
  ]
  
})

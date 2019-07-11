import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from "./views/About.vue"
import take from  "./views/take"
import supermarket from './views/supermarket'
import order from './views/order'
import my from './views/my'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
     path:'/' ,
     redirect:{name:"home"}
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      redirect:{name:'take'},
      children:[
        {
          path:'/home/take',
          name:"take",
          component:take
        },
        {
          path:'/home/supermarket',
          name:"supermarket",
          component:supermarket
        },
        {
          path:'/home/order',
          name:"order",
          component:order
        },
        {
          path:'/home/my',
          name:"my",
          component:my
        }
      ]

    },
   
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      component:About
    }
  ]
})

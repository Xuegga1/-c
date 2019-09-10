/*
 * @Author: Meicen
 * @Date: 2019-08-30 15:50:20
 * @LastEditors: Meicen
 * @LastEditTime: 2019-08-31 11:05:22
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      component: ()=>import('./views/Home/home.vue')
    },
    {
      path:'/car',
      component: ()=>import('./views/car/car.vue')
    },
    {
      path:'/detail/:id',
      component: ()=>import('./views/detail/detail.vue')
    },
    {
      path: '/',
      redirect:'/home'
    }
  ]
})

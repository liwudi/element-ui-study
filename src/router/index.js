import Vue from 'vue'
import Router from 'vue-router'

import Login from '../views/login/Login.vue'

import Register from '../views/register/Register.vue'

import Main from '../views/main/Main.vue'
import App from '../views/main/app/App.vue'
import Order from '../views/main/orderManager/Order.vue'
import ShopCar from '../views/main/shopCar/ShopCar.vue'
import UserCenter from '../views/main/userCenter/UserCenter.vue'

import Detail from '../views/detail/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      redirect:'/main/app',
      children: [
        {
          path:'app',
          name: "App",
          component: App
        },{
          path:'order',
          name: "OrderManager",
          component: Order
        },{
          path:'shopcar',
          name: "ShopCar",
          component: ShopCar
        },{
          path:'usercenter',
          name: "UserCenter",
          component: UserCenter
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

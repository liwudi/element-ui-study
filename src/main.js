// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import ElementUi from 'element-ui'
import store from './store/index'
//import 'element-ui/packages/theme-chalk/src/index'

Vue.use(ElementUi)
//import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

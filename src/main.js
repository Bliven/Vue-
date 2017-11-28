// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios  from  "axios"
import cookie from "vue-cookies"
Vue.config.productionTip = false
// import vuex from "vuex"
import store from "./store/store"
Vue.prototype.axios = axios
Vue.use(cookie)
// var VueCookie = require('vue-cookie');
// // Tell Vue to use the plugin
// Vue.use(VueCookie);V
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})

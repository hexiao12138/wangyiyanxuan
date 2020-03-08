import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Header from './components/Header'
import Splite from './components/Splite'
import './mock/mock.js'
import store from './store'
Vue.config.productionTip = false
Vue.component(Header.name,Header)
Vue.component(Splite.name,Splite)
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App />',
  router,
  store
})

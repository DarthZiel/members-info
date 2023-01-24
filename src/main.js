import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import router from './router'
import VueNotification from 'vue-notification'
import Notifications from 'vue-notification'
Vue.use(VueNotification)
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(Notifications)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
const APIURL = 'http://127.0.0.1:8000/'

export default APIURL


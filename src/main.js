// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// iview
import iview from 'iview'
import 'iview/dist/styles/iview.css'
// axios
import axios from 'axios'
// qs
import qs from 'qs'
// lodash
import lodash from 'lodash'

// iview
Vue.use(iview)
// axios
axios.defaults.baseURL = ''
// axios.defaults.baseURL = 'http://127.0.0.1:8094'
// axios.defaults.baseURL = 'http://10.226.19.153:8888'
// noinspection JSUnusedGlobalSymbols
Vue.prototype.$http = axios
// qs
// noinspection JSUnusedGlobalSymbols
Vue.prototype.$qs = qs
// lodash
// noinspection JSUnusedGlobalSymbols
Vue.prototype.$_ = lodash
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

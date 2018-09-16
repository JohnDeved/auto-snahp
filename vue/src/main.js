// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuesax from 'vuesax'
import VueClipboard from 'vue-clipboard2'

import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(VueClipboard)
Vue.use(Vuesax)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

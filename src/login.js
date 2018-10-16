import Vue from 'vue'
import FastClick from 'fastclick'
import Axios from 'axios'

import AppLogin from './AppLogin'
import 'font-awesome/css/font-awesome.css'

Vue.prototype.$axios = Axios
FastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
    render: h => h(AppLogin)
}).$mount('#app-login')
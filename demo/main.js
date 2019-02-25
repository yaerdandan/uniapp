import Vue from 'vue'
import App from './App'
import store from './store/index.js'
Vue.config.productionTip = false

App.mpType = 'app'
Vue.prototype.url = "http://10.2.48.63/social/public/index.php/";
Vue.prototype.$store = store;
const app = new Vue({
    ...App
})
app.$mount()

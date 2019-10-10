import Vue from 'vue'
import App from './App'
import uniCard from "@/components/uni-card/uni-card"
import uniIcons from "@/components/uni-icon/uni-icon.vue"

Vue.config.productionTip = false
Vue.component('uni-card',uniCard)
Vue.component('uni-icons',uniIcons)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

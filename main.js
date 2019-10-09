import Vue from 'vue'
import App from './App'
import uniCard from "@/components/uni-card/uni-card"

Vue.config.productionTip = false
Vue.component('uni-card',uniCard)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

import Vue from 'vue'
import App from './App'
import uniCard from "@/components/uni-card/uni-card"
import uniIcons from "@/components/uni-icon/uni-icon.vue"
import uniBadge from "@/components/uni-badge/uni-badge.vue"
import uniList from "@/components/uni-list/uni-list"
import uniListItem from "@/components/uni-list-item/uni-list-item"
import uniListItemCustom from "@/components/uni-list-item-custom/uni-list-item-custom"
import uniNoticeBar from "@/components/uni-notice-bar/uni-notice-bar"

Vue.config.productionTip = false
Vue.component('uni-card',uniCard)
Vue.component('uni-icons',uniIcons)
Vue.component('uni-badge',uniBadge)
Vue.component('uni-list',uniList)
Vue.component('uni-list-item',uniListItem)
Vue.component('uni-list-item-custom',uniListItemCustom)
Vue.component('uni-notice-bar',uniNoticeBar)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

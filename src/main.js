import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import {  FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faCloud, faWater, faWind, faTemperatureHigh, faSun, faEye, faTemperatureLow, faHeart, faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faCloud, faWater, faWind, faTemperatureHigh, faSun, faEye, faTemperatureLow, faHeart, faMinus, faPlus, faTrash  )

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')

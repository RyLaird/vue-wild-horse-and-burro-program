import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueTour from 'vue-tour'
import vuetify from './plugins/vuetify'
import 'leaflet/dist/leaflet.css';

require('vue-tour/dist/vue-tour.css')

Vue.config.productionTip = false

Vue.use(VueTour)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

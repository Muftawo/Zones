import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDu_7iS64TN1C0UJqxqS30xNAuTC_4Zc-I',
    libraries: 'places',
  }
});
new Vue({
  render: h => h(App),
}).$mount('#app')

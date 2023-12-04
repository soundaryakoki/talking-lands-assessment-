import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyD9HupIM7z4PPAuRCnY53LKZpbQnJ6Q87Q',
    libraries: 'places',
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')

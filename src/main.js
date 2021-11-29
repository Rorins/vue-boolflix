import Vue from 'vue'
import App from './App.vue'
//Importazione di bootstrap partendo da nodemodules
import 'bootstrap/scss/bootstrap.scss';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import UUID from "vue-uuid";
import * as VeeValidate from 'vee-validate';
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

Vue.use(Chartkick.use(Chart))
Vue.use(VeeValidate);
library.add(faPlus, faTrash)

Vue.component('fa-icon', FontAwesomeIcon)

Vue.use(UUID);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

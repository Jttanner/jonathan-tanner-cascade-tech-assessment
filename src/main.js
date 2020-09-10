import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//import test data file
import TestData from './test-data/transaction-feed-example-data.json'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    transactionFeed : TestData //for testing this application set the state of the store to our example data
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

new Vue({
  render: h => h(App),
  store: store,
  
}).$mount('#app')

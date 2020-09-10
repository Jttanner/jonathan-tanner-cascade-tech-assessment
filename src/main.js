import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import TestData from './test-data/transaction-feed-example.json'

console.log(JSON.stringify(TestData))

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    transactionFeed : TestData
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

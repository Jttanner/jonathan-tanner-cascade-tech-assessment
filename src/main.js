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
    transactionFeed : TestData, //for testing this application set the state of the store to our example data
    selectedTransactionData: {}, //start empty, update when items are selected
    startingStatementBalance: 0,
    settledTransactionValueSum: 0,
    unsettledTransactionValueSum: 0
  },
  mutations: {
    updateSelectedTransactionData (state, selectedTransactionData) {
      state.selectedTransactionData = selectedTransactionData
    },
    updateStartingStatementBalance(state, newStartingStatementBalance){
      state.startingStatementBalance = newStartingStatementBalance
    },
    updateSettledTransactionValueSum(state, newSettledTransactionValueSum){
      state.settledTransactionValueSum = newSettledTransactionValueSum
    },
    updateUnsettledTransactionValueSum(state, newUnsettledTransactionValueSum){
      state.unsettledTransactionValueSum = newUnsettledTransactionValueSum
    },
  }
})

new Vue({
  render: h => h(App),
  store: store,
  
}).$mount('#app')

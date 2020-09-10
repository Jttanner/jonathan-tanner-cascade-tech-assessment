<template>
  <div class="transaction">
    <h1>{{ title }}</h1>
    <br />
  
    <table class="table table-striped">
      <thead>
        <th scope="col">
          Transaction Date
        </th>
        <th scope="col">
          Account Number
        </th>
        <th scope="col">
          Transaction Type
        </th>
        <th scope="col">
          Transaction Amount
        </th>
        <th>
          Merchant Name
        </th>
        <th>
          Transaction Settled
        </th>
        <th scope="col">
        </th>
      </thead>
      <tbody>
          <tr v-for="transaction in this.$store.state.transactionFeed.Statement.Transactions" v-bind:key="transaction.id">
            <td>
              {{new Date(transaction.TransactionDate).toLocaleString()}}
            </td>
            <td>
              {{transaction.AccountNumber}}
            </td>
            <td>
              {{transaction.TransactionTypeId}}
            </td>
            <td>
              ${{transaction.Amount}}
            </td>
            <td>
              {{transaction.MerchantName}}
            </td>
            <td>
              {{transaction.Billed ? "Settled" : "Not Settled"}}
            </td>
            <td>
              <button v-on:click="updateModalWithSelectedTransactionData(transaction)" :class="transaction.Billed ? 'btn btn-info' : 'btn btn-warning'" data-toggle="modal" data-target="#selectedTransactionModal">
                Show More Details
              </button>
            </td>
          </tr>
      </tbody>
    </table>

    <br />

    <table class="table table-striped">
      <thead>
        <th></th>
        <th>Ignoring Transactions Not Settled</th>
        <th>Including Transacions Settled and Not Settled</th>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Starting Balance</th>
          <td>${{this.$store.state.startingStatementBalance.toFixed(2)}}</td>
          <td>${{this.$store.state.startingStatementBalance.toFixed(2)}}</td>
        </tr>
        <tr>
          <th scope="row">Amount Charged</th>
          <td>-${{this.$store.state.settledTransactionValueSum.toFixed(2)}}</td>
          <td>-${{(this.$store.state.settledTransactionValueSum + this.$store.state.unsettledTransactionValueSum).toFixed(2)}}</td>
        </tr>
        <tr>
          <th scope="row">Final Balance</th>
          <td>${{(this.$store.state.startingStatementBalance - this.$store.state.settledTransactionValueSum).toFixed(2)}}</td>
          <td>{{(this.$store.state.startingStatementBalance - this.$store.state.settledTransactionValueSum - this.$store.state.unsettledTransactionValueSum).toFixed(2)}}</td>
        </tr>
      </tbody>
    </table>


    <div class="modal fade" id="selectedTransactionModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Transaction Details</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <table class="table table-bordered table-striped">
              <tbody>
                <tr>
                  <th scope="row">
                    Original Trace Audit Number
                  </th>
                  <td>
                    {{this.$store.state.selectedTransactionData.OriginalTraceAuditNo == null ? "N/A" : this.$store.state.selectedTransactionData.selectedAuditNumber}}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    Related Account Number
                  </th>
                  <td>
                    {{this.$store.state.selectedTransactionData.AccountNumber}}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    Transaction Type
                  </th>
                  <td>
                    {{this.$store.state.selectedTransactionData.TransactionTypeId}}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    Transaction Date
                  </th>
                  <td>
                    {{new Date(this.$store.state.selectedTransactionData.TransactionDate).toLocaleString()}}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    Business Date
                  </th>
                  <td>
                    {{new Date(this.$store.state.selectedTransactionData.BusinessDate).toLocaleString()}}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    Available Balance at Time of Transaction
                  </th>
                  <td>
                    ${{this.$store.state.selectedTransactionData.AvailableBalance}}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    Transaction Amount
                  </th>
                  <td>
                    ${{this.$store.state.selectedTransactionData.Amount}}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    Description
                  </th>
                  <td>
                    {{this.$store.state.selectedTransactionData.Description}}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    Billed
                  </th>
                  <td>
                    {{this.$store.state.selectedTransactionData.Billed ? "Yes" : "Not Settled"}}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    Merchant Name 
                  </th>
                  <td>
                    {{this.$store.state.selectedTransactionData.MerchantName}}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    Merchant Id
                  </th>
                  <td>
                    {{this.$store.state.selectedTransactionData.MerchantId}}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'TransactionFeedComponent',
  props: {
    title: String
  },
  created: function() {
    
    let earliestDate = null
    let earliestAvailableBalance = 0;
    let settledTransactionValueSum = 0;
    let unsettledTransactionValueSum = 0;
    this.$store.state.transactionFeed.Statement.Transactions.forEach(function(currTransaction){
      //get starting balance by getting the available balance from the earliest transaction
      if (earliestDate == null || currTransaction.TransactionDate < earliestDate){
        earliestDate = currTransaction.TransactionDate
        earliestAvailableBalance = currTransaction.AvailableBalance
      }
      if (currTransaction.Billed){
        //Calculate final balance exluding unsettled balances
        settledTransactionValueSum += currTransaction.Amount
      }
      else {
        //Calculate not settled balance
        unsettledTransactionValueSum += currTransaction.Amount
      }
    })
    // alert(earliestDate)
    // alert(earliestAvailableBalance)
    // alert(settledTransactionValueSum)
    // alert(unsettledTransactionValueSum)
    //Update starting balance
    this.$store.commit('updateStartingStatementBalance', earliestAvailableBalance)
    //Update final balance 
    this.$store.commit('updateSettledTransactionValueSum', settledTransactionValueSum)
    
    //Update not settled balance
    this.$store.commit('updateUnsettledTransactionValueSum', unsettledTransactionValueSum)
  },
  methods:{
    updateModalWithSelectedTransactionData : function (transactionData){
      this.$store.commit('updateSelectedTransactionData', transactionData) //update with selected data so it databinds with modal
    },
  },  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

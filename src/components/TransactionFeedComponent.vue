<template>
  <div class="transaction">
    <h1>{{ title }}</h1>
    <table class="table table-bordered table-striped">
      <thead>
        <th scope="col">
          Account Number
        </th>
        <th scope="col">
          Transaction Type
        </th>
        <th scope="col">
          Transaction Amount
        </th>
        <th scope="col">
        </th>
      </thead>
      <tbody>
          <tr v-for="transaction in this.$store.state.transactionFeed.Statement.Transactions" v-bind:key="transaction.id">
            <td>
              {{transaction.AccountNumber}}
            </td>
            <td>
              {{transaction.TransactionTypeId}}
            </td>
            <td>
              {{transaction.TransactionDate}}
            </td>
            <td>
              {{transaction.Amount}}
            </td>
            <td>
              <button v-on:click="test(transaction)" class="btn btn-info" type="button" data-toggle="collapse" data-target="#detailsPane" aria-expanded="false" aria-controls="collapseExample">
                Show Details
              </button>
            </td>
          </tr>
      </tbody>
    </table>

    <div class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Modal body text goes here.</p>
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
  methods:{
    test : function (transactionData){
      alert(JSON.stringify(transactionData))
    }
  },
  data: function() {
    return {
      transactionDataForModal: null //initializes as null, set to the transaction data when "show details" button is clicked
    }
  }
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

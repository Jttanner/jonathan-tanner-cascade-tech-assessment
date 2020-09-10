<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    
    <h3>Test Data</h3>
    <div>
      {{JSON.stringify(this.$store.state.transactionFeed)}}
    </div>
    <h3>Bootstrap Test</h3>
    <button class="btn btn-primary">This button has bootstrap styling</button>
    <h3>Bootstrap columns</h3>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <button class="btn btn-primary btn-block">primary</button>
        </div>
        <div class="col-md-4">
          <button class="btn btn-warning btn-block">warning</button>
        </div>
        <div class="col-md-4">
          <button class="btn btn-danger btn-block">danger</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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

<template>
  <div id="app">
    <TransactionFeedComponent title="Transactions"/>
  </div>
</template>

<script>
import TransactionFeedComponent from './components/TransactionFeedComponent.vue'

export default {
  name: 'App',
  components: {
    TransactionFeedComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h3><router-link :to="{ name:'HelloWorld', query: {msg: 'welcome to lty dome'} }">Go to HelloWorld</router-link></h3>
    <h3><router-link to="/vuexTest">Go to VuexTest</router-link></h3>
    <router-view></router-view>
  </div>
</template>

<script>
import router from './router/index.js'

export default {
  name: 'app',
  router
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

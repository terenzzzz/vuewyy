<template>
  <div id="app">
    <router-view/>
    <Footer></Footer>
  </div>
  
</template>

<script>
import Footer from "../src/components/Footer"
export default {
  name: 'App',
  components:{
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: smaller;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.body{
		padding-top: 100px;
		padding-bottom: 150px;
}
</style>

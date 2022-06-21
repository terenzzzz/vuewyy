<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
    <Footer v-show="footerShow"></Footer>
  </div>

</template>

<script>
import Footer from '../src/components/Footer'
export default {
  name: 'App',
  components: {
    Footer
  },
  data () {
    return {
      footerShow: true
    }
  },
  created () {
    if (this.$route.name === 'Login' || this.$route.name === 'MobileLogIn' || this.$route.name === 'PasswordLogIn' || this.$route.name === 'PlayView') { this.footerShow = false }
  },
  watch: {
    // 如果路由有变化，再次执行该方法
    '$route': 'fetchDate'
  },
  mounted () {

  },
  methods: {
    fetchDate () {
      if (this.$route.name === 'Login' || this.$route.name === 'MobileLogIn' ||
        this.$route.name === 'PasswordLogIn' || this.$route.name === 'PlayView') {
        this.footerShow = false
      } else {
        this.footerShow = true
      }
    }
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
  color: black;
}

.body{
  padding-top: 100px;
  padding-bottom: 150px;
}
</style>

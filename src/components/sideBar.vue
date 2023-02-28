<template>
  <div class="sideBar">
    <!-- 搜索栏 -->
    <div class="row bg-light pt-1 pb-3 navbar fixed-top g-0">
      <div class="row d-flex align-items-center navbar navbar-expand-lg navbar-light bg-light g-0 px-2">
        <div class="col-2">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span ><i class="fa-solid fa-bars"></i></span>
          </button>
        </div>

        <div class="col-8">
          <input v-model="keyword" type="text" :placeholder="''+ searchKeyword"  style="font-family:Arial,FontAwesome;width:100%;padding: 5px;" @keyup.enter="goResult(keyword)">
        </div>

        <div class="col-2">
          <i class="fa-solid fa-microphone-lines fa-lg"></i>
        </div>
      </div>
      <!-- 弹出框 -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#/login"><span>登录</span></a>
            <a class="nav-link" href="#" @click="logOut"><span>退出</span></a>
          </li>
        </ul>
      </div>
    </div>

   </div>
</template>
<!-- 导入axios包 -->
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
export default {
  name: 'SideBar',
  components: {

  },
  mixins: [],
  props: {

  },
  data () {
    return {
      searchKeyword: '',
      keyword: '',
      sessionUid: sessionStorage.getItem('userId'),
      sessionCookie: sessionStorage.getItem('userCookie')
    }
  },
  computed: {

  },
  watch: {

  },
  mounted () {
    this.getSearchKeyword()
  },
  methods: {
    getSearchKeyword: function () {
      var that = this
      axios.get('http://localhost:3000/search/default').then
      (function (response) {
        // console.log(response)
        that.searchKeyword = response.data.data.showKeyword
      }, function (err) {
        console.log(err)
      })
    },

    logOut: function () {
      axios.post('http://localhost:3000/logout?cookie=' + this.sessionCookie).then
      (function (response) {
        console.log(response)
      }, function (err) {
        console.log(err)
      })
      window.location.reload()
      sessionStorage.clear()
    },

    goResult: function (word) {
      this.$router.push({path: '/searchResult', query: {keyWord: word}})
      if (this.$route.fullPath === '/searchResult?keyWord=' + word) {
        window.location.reload()
      }
    }

  }
}
</script>
<style lang='' scoped>

</style>

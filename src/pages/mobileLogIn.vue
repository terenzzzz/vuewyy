<template>
  <div class="mobileLogIn">
    <!-- 导航栏 -->
    <div class="row align-items-center bg-light pt-5 pb-3 ps-3 pe-3 navbar fixed-top">
      <div class="container">
        <div class="col-2">
          <a href="javascript:history.back()"><i class="fa-solid fa-chevron-left"></i></a>
        </div>
        <div class="col-8"></div>
        <div class="col-2"></div>
      </div>
    </div>
    <div class="body">
      <div class="card mx-3 py-5 mt-4 bg-light">
        <h1>手机登录</h1>
        <div class="logInForm px-3 pt-5">
          <form action="">
            <div class="row g-0 ">
              <div class="col-3">
                <label for="mobile">手机号:</label>
              </div>
              <div class="col-8">
                <input type="text" placeholder="请输入您的手机号" id="mobile" v-model="mobile" style="width:100%">
              </div>
            </div>
            <div class="row g-0 pt-4">
              <div class="col-3">
                <label for="code">验证码:</label>
              </div>
              <div class="col-8">
                <input type="text" placeholder="请输入您的验证码" id="code" v-model="code" @keyup.enter="getLogIn"
                  style="width:100%">
              </div>
            </div>
          </form>

          <div class="row mx-3 py-5 g-2">
            <button class="btn btn-primary" @click="getCode"> 获取验证码</button>
            <button class="btn btn-primary" @click="logInWithCode"> 登录</button>
          </div>
        </div>

        <div class="iconList mt-5 pt-5 mb-5">
          <i class="fa-brands fa-qq fa-2x mx-2"></i>
          <i class="fa-brands fa-weibo fa-2x mx-2"></i>
          <i class="fa-brands fa-apple fa-2x mx-2"></i>
          <br>
          <span class="text-muted">登录遇到问题？</span>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- 导入axios包 -->
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
export default {
  name: 'MobileLogIn',
  components: {

  },
  mixins: [],
  props: {

  },
  data () {
    return {
      mobile: '',
      code: '',
      userId: '',
      isLogin: false
    }
  },
  computed: {

  },
  watch: {

  },
  mounted () {

  },
  methods: {
    getCode: function () {
      axios.get('https://www.terenzzzz.com:3002/captcha/sent?phone=' + this.mobile).then
      (function (response) {
        console.log(response)
      }, function (err) {
        console.log(err)
      })
    },

    logInWithCode: function () {
      var that = this
      axios.get('https://www.terenzzzz.com:3002/login/cellphone?phone=' + this.mobile + '&password=' + '&captcha=' + this.code).then
      (function (response) {
        if (response.status === 200) {
          window.sessionStorage.setItem('userId', response.data.account.id)
          window.sessionStorage.setItem('userCookie', encodeURIComponent(response.data.cookie))
          that.goIndex()
        }
      }, function (err) {
        console.log(err)
      })
    },

    goIndex: function () {
      this.$router.push({path: '/'})
      if (this.$route.fullPath == '/') {
        window.location.reload()
      }
    }

  }
}
</script>
<style lang='' scoped>
  .body{
    padding-top: 100px;
    padding-bottom: 60px;
  }

</style>

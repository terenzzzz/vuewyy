<template>
  <div class="logIn">
    <!-- 导航栏 -->
    <div class="row align-items-center bg-light pt-5 pb-3 ps-3 pe-3 navbar fixed-top">
        <div class="container">
              <div class="col-2">
                <a href="javascript:history.back()"><i class="fa-solid fa-chevron-left"></i></a>
              </div>
              <div class="col-8">

              </div>
              <div class="col-2">
                立即体验
              </div>
        </div>
    </div>
    <div class="body">
      <img src="../assets/beluga.JPG" class="rounded-circle mb-3" style="width:200px;" alt="Avatar" />
      <div class="d-grid gap-4 px-5 my-5 pt-5">
        <a href="#/mobileLogin" class="btn btn-primary">手机号登录</a>
        <a href="#/passwordLogin" class="btn btn-primary">密码登录</a>
        <button class="btn btn-primary">邮箱登录</button>
        <span class="text-muted m-0 p-0">*我已同意服务条款，隐私政策</span>
      </div>

      <div class="iconList mt-5 pt-5">
        <i class="fa-brands fa-qq fa-2x mx-2"></i>
        <i class="fa-brands fa-weibo fa-2x mx-2"></i>
        <i class="fa-brands fa-apple fa-2x mx-2"></i>
        <br>
        <span class="text-muted">登录遇到问题？</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  components: {

  },
  mixins: [],
  props: {

  },
  data () {
    return {

    }
  },
  computed: {

  },
  watch: {

  },
  mounted () {

  },
  methods: {

  }
}
</script>
<style lang='' scoped>
</style>

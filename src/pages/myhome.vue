<template>
  <div class="myhome">
    <!-- 导航栏 -->
    <div class="row  bg-light pt-5 pb-3 ps-3 pe-3 navbar fixed-top">
      <div class="container">
        <div class="col-2">
          <i class="fa-solid fa-bars"></i>
        </div>
        <div class="col-8"></div>
        <div class="col-2">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </div>
    <div class="body">
      <!-- 个人信息 -->
      <div class="card mx-4 rounded-5 bg-light">
        <div class="row">
          <div class="mx-auto pt-2">
            <img :src="this.detail.profile.avatarUrl" class="rounded-circle mb-3" style="width:70px;" alt="Avatar" />
          </div>
          <h5 class="mb-2"><strong>{{this.detail.profile.nickname}}</strong><span class="badge bg-dark ms-2">VIP</span>
          </h5>
          <div class="row d-flex justify-content-center g-0">
            <div class="col-2"><span>关注: {{this.detail.profile.follows}}</span></div>
            <div class="col-2"><span>粉丝: {{this.detail.profile.followeds}}</span></div>
            <div class="col-2"><span>lv. {{this.detail.level}}</span></div>
          </div>
        </div>
      </div>
      <!-- 功能区 -->
      <div class="card mx-4 rounded-4 bg-light mt-3">
        <div class="row p-2">
          <div class="col-3">
            <a href="#/recentPlay" class="text-decoration-none text-black">
              <i class="fa-solid fa-circle-play"></i>
              <br>
              <span class="small">最近播放</span>
            </a>
          </div>
          <div class="col-3">
            <i class="fa-solid fa-circle-arrow-down"></i>
            <br>
            <span class="small">本地</span>
          </div>
          <div class="col-3">
            <i class="fa-solid fa-cloud"></i>
            <br>
            <span class="small">云盘</span>
          </div>
          <div class="col-3">
            <i class="fa-solid fa-user-group"></i>
            <br>
            <span class="small">我的好友</span>
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <i class="fa-solid fa-star"></i>
            <br>
            <span class="small">收藏和赞</span>
          </div>
          <div class="col-3">
            <i class="fa-solid fa-podcast"></i>
            <br>
            <span class="small">我的播客</span>
          </div>
          <div class="col-3"></div>
          <div class="col-3"></div>
        </div>
      </div>
      <!-- 我的喜欢 -->
      <div class="card mx-4 rounded-3 bg-light mt-3">
        <div class="row p-3 d-flex align-items-center g-0">
          <div class="col-3"><img :src="likeListPic" class="img-fluid" alt=""></div>
          <div class="col-5">
            <span class="small">我喜欢的音乐</span>
            <br>
            <span class="small text-muted">257首</span>
          </div>
          <div class="col-4">
            <i class="fa-solid fa-heart-pulse"></i>
            <br>
            <span class="small">心动模式</span>
          </div>
        </div>
      </div>

      <!-- 导航栏 -->
      <div class="row mt-3 ps-2 pe-2 g-1">
        <div class="col-4 border-end"><span class="small">创建歌单</span></div>
        <div class="col-4 border-end"><span class="small">收藏歌单</span></div>
        <div class="col-3"><span class="small">歌单助手</span></div>
      </div>

      <!-- 歌单列表 -->
      <div class="card mx-4 rounded-3 bg-light mt-2 pb-2">
        <div class="row p-3 ">
          <div class="col-5"><span class="small">收藏歌单({{songLists.length}}个)</span></div>
          <div class="col-5"></div>
          <div class="col-2"><i class="fa-solid fa-ellipsis-vertical"></i></div>
        </div>

        <div class="row ps-3 d-flex align-items-center g-0 mb-2" v-for="songList in songLists" :key="songList"
          @click="goList(songList.id)">
          <div class="col-2">
            <img :src="songList.coverImgUrl" class="img-fluid" alt="">
          </div>
          <div class="col-10">
            <span class="small">{{songList.name}}</span>
            <br>
            <span class="small text-muted">{{songList.trackCount}}首,by {{songList.creator.nickname}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- 导入axios包 -->
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
export default {
  name: 'Myhome',
  data () {
    return {
      detail: [],
      songLists: [],
      likeList: [],
      likeListPic: '',
      likeListCount: '',
      sessionUid: sessionStorage.getItem('userId'),
      sessionCookie: sessionStorage.getItem('userCookie'),
      isLogin: false
    }
  },
  mounted () {
    this.checkLogin(),
    this.getUserDetail(),
    this.getLikelist(),
    this.getSongList(),
    this.getFirstSong(),
    console.log(this.likeListPic)
  },
  methods: {
    checkLogin: function () {
      // console.log(this.sessionCookie);
      if (this.sessionCookie == null) {
        this.$router.push({path: '/login'})
      }
    },

    getUserDetail: function () {
      var that = this
      axios.get('http://localhost:3001/user/detail?uid=' + this.sessionUid).then
      (function (response) {
        that.detail = response.data
        // console.log(response)
      }, function (err) {
        console.log(err)
      })
    },

    getLikelist: function () {
      var that = this
      axios.get('http://localhost:3001/likelist?uid=' + this.sessionUid + '&cookie=' + this.sessionCookie).then
      (function (response) {
        that.likeList = response.data.ids
        that.likeListCount = response.data.ids.length
        console.log(response)
      }, function (err) {
        console.log(err)
      })
    },

    getFirstSong: function () {
      var that = this
      axios.get('http://localhost:3001/song/detail?ids=1808465866').then
      (function (response) {
        that.likeListPic = response.data.songs[0].al.picUrl
      }, function (err) {
        console.log(err)
      })
    },

    getSongList: function () {
      var that = this
      axios.get('http://localhost:3001/user/playlist?uid=' + this.sessionUid + '&cookie=' + this.sessionCookie).then
      (function (response) {
        that.songLists = response.data.playlist
        // console.log(response)
      }, function (err) {
        console.log(err)
      })
    },
    goList: function (listId) {
      this.$router.push({path: '/singleList', query: {id: listId}})
    }
  }
}
</script>
<style lang='' scoped>
</style>;

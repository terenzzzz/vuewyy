<template>
  <div class="searchResult">
    <!-- 导航栏 -->
    <div class="row align-items-center bg-light pt-5 pb-3 ps-3 pe-3 navbar fixed-top">
      <div class="container">
        <div class="col-2">
          <a href="javascript:history.back()"><i class="fa-solid fa-chevron-left"></i></a>
        </div>
        <div class="col-8">
          搜索结果
        </div>
        <div class="col-2">
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </div>
    </div>

    <div class="body">
      <!-- 搜索分类 -->
      <div class="category">
        <div class="row g-0">
          <div class="col-2" @click="searchSong"><span>单曲</span></div>
          <div class="col-2" @click="searchAlbum"><span>专辑</span></div>
          <div class="col-2" @click="searchSinger"><span>歌手</span></div>
          <div class="col-2" @click="searchList"><span>歌单</span></div>
          <div class="col-2" @click="searchUser"><span>用户</span></div>
        </div>
      </div>

      <!-- 音乐列表 -->
      <div class="card mb-2" v-for="song in result" :key="song" v-show="typeShow == '单曲'">
        <div class="row align-items-center my-2 ps-2 pe-2 g-1" @click="playSong(song.id)">
          <div class="col-2">
            <img :src="song.al.picUrl" class="img-fluid" alt="">
          </div>
          <div class="col-8">
            <span>{{song.name}} - {{song.al.name}}</span>
            <br>
            <span class="small text-muted m-1" v-for="artist in song.ar" :key="artist">{{artist.name}}</span>
          </div>
          <div class="col-2">
            <i class="fa-brands fa-youtube pe-2"></i>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
      </div>

      <!-- 专辑 -->
      <div class="card" v-for="(album,index) in albums" :key="album" v-show="typeShow == '专辑'">
        <div class="row align-items-center my-2 ps-2 pe-2 g-1">
          <div class="col-1">{{index+1}}.</div>
          <div class="col-2">
            <img :src="album.picUrl" class="img-fluid " alt="">
          </div>
          <div class="col-7">
            <span>{{album.name}}</span>
            <br>
            <span class="small text-muted m-1">{{album.artist.name}} {{album.company}}</span>
          </div>
          <div class="col-2">
            <i class="fa-brands fa-youtube pe-2"></i>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
      </div>

      <!-- 歌手 -->
      <div class="card mb-2" v-for="(singer,index) in singers" :key="singer" v-show="typeShow == '歌手'">
        <div class="row align-items-center my-2 ps-2 pe-2 g-1">
          <div class="col-1">{{index+1}}.</div>
          <div class="col-3">
            <img :src="singer.picUrl" class="img-fluid rounded-circle" alt="">
          </div>
          <div class="col-5">
            <span>{{singer.name}}</span>
          </div>
          <div class="col-3">
            <button class="btn btn-primary btn-sm"><i class="fa-solid fa-plus"></i>关注</button>
          </div>
        </div>
      </div>

      <!-- 歌单 -->
      <div class="row align-items-center mt-2 ps-1 pe-1 g-1" v-for="(playList,index) in playLists" :key="playList"
        v-show="typeShow == '歌单'">
        <div class="col-1"> {{index+1}}. </div>
        <div class="col-2">
          <img :src="playList.coverImgUrl" class="img-fluid" alt="">
        </div>
        <div class="col-9 ">
          <span class="small">{{playList.name}}</span>
          <br>
          <span class="small text-muted me-2">{{playList.trackCount}}首音乐 by {{playList.creator.nickname}}</span>
        </div>
      </div>

      <!-- 用户 -->
      <div class="card mb-2" v-for="(user,index) in users" :key="user" v-show="typeShow == '用户'">
        <div class="row align-items-center my-2 ps-2 pe-2 g-1">
          <div class="col-1">{{index+1}}.</div>
          <div class="col-2">
            <img :src="user.avatarUrl" class="img-fluid rounded-circle" alt="">
          </div>
          <div class="col-6">
            <span>{{user.nickname}}</span>
          </div>
          <div class="col-3">
            <button class="btn btn-primary btn-sm"><i class="fa-solid fa-plus"></i>关注</button>
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
  name: 'SearchResult',
  components: {

  },
  mixins: [],
  props: {

  },
  data () {
    return {
      keyword: this.$route.query.keyWord,
      typeShow: '用户',
      result: [],
      albums: [],
      singers: [],
      playLists: [],
      users: []
    }
  },
  computed: {

  },
  watch: {

  },
  mounted () {
    this.searchSong()
  },
  methods: {
    searchSong: function () {
      var that = this
      axios.get('http://46.101.60.239:3001/cloudsearch?limit=50&keywords=' + this.keyword).then
      (function (response) {
        console.log(response)
        that.result = response.data.result.songs
        that.typeShow = '单曲'
      }, function (err) {
        console.log(err)
      })
    },

    searchAlbum: function () {
      var that = this
      axios.get('http://46.101.60.239:3001/cloudsearch?limit=50&type=10&keywords=' + this.keyword).then
      (function (response) {
        that.albums = response.data.result.albums
        that.typeShow = '专辑'
      }, function (err) {
        console.log(err)
      })
    },

    searchSinger: function () {
      var that = this
      axios.get('http://46.101.60.239:3001/cloudsearch?limit=50&type=100&keywords=' + this.keyword).then
      (function (response) {
        that.singers = response.data.result.artists
        that.typeShow = '歌手'
      }, function (err) {
        console.log(err)
      })
    },

    searchList: function () {
      var that = this
      axios.get('http://46.101.60.239:3001/cloudsearch?limit=50&type=1000&keywords=' + this.keyword).then
      (function (response) {
        console.log(response)
        that.playLists = response.data.result.playlists
        that.typeShow = '歌单'
      }, function (err) {
        console.log(err)
      })
    },

    searchUser: function () {
      var that = this
      axios.get('http://46.101.60.239:3001/cloudsearch?limit=50&type=1002&keywords=' + this.keyword).then
      (function (response) {
        console.log(response)
        that.users = response.data.result.userprofiles
        that.typeShow = '用户'
      }, function (err) {
        console.log(err)
      })
    },
    playSong: function (songId) {
      this.$router.push({path: '/playView', query: {id: songId}})
    }

  }
}
</script>
<style lang='' scoped>
</style>

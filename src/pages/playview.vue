<template>
  <div class="playView">
    <!-- 导航栏 -->
    <div class="row align-items-center bg-light pt-5 pb-3 ps-3 pe-3 navbar fixed-top">
      <div class="container">
        <div class="col-2">
          <a href="javascript:history.back()"><i class="fa-solid fa-chevron-left"></i></a>
        </div>
        <div class="col-8">
          <span> 正在播放 </span>
        </div>
        <div class="col-2">
          <i class="fa-solid fa-arrow-right-from-bracket"></i>
        </div>
      </div>
    </div>
    <div class="body">

      <div class="info" @click="changeLrcShow">
        <!-- 歌曲封面 -->
        <div class="row mt-2">
          <div class="col-3"></div>
          <div class="col-6"><img :src="songDetail.al.picUrl" class="img-fluid" alt=""></div>
          <div class="col-3"></div>
        </div>

        <!-- 歌曲信息 -->
        <div class="row">
          <span class="fw-bold mt-1">{{songDetail.name}}</span>
          <br>
          <span class="small text-muted me-2" v-for="artist in songDetail.ar" :key="artist">{{artist.name}}</span>
        </div>

        <!-- 歌词 -->
        <div class="musicLyric mt-4">
          <p v-show="isLryShow==false">点击查看歌词</p>
          <p class="lrc" v-for="lyric in fixLyric()" :key="lyric" v-show="isLryShow">
            {{lyric.lrc}}
          </p>
        </div>
      </div>

      <!-- 播放器 -->
      <div class="navbar fixed-bottom bg-light">
        <audio controls autoplay ref="audio" :src="songUrl" hidden="true">
          Your browser does not support the audio element.
        </audio>
        <div class="row mx-auto d-flex align-items-center border-bottom">
          <div class="col-2 mb-1">
            <img :src="songDetail.al.picUrl" class="img-fluid" alt="">
          </div>
          <div class="col-4">
            <span>{{songDetail.name}}</span>
            <br>
            <span class="small text-muted me-2" v-for="artist in songDetail.ar" :key="artist">{{artist.name}}</span>
          </div>
          <div class="col-2">
            <i class="fa-solid fa-circle-pause fa-2x" @click="play" v-show="isplaying"></i>
            <i class="fa-solid fa-circle-play fa-2x" @click="play" v-show="isplaying == false"></i>
          </div>
          <div class="col-2"><i class="fa-solid fa-volume-high fa-2x"></i></div>
          <div class="col-2">
            <i class="fa-solid fa-bars fa-lg"></i>
          </div>
        </div>
        <div class="mx-auto mt-1">
          <p class="text-muted">@Terence{{year}}</p>
        </div>
      </div>

    </div>

  </div>
</template>
<!-- 导入axios包 -->
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
export default {
  name: 'PlayView',
  components: {

  },
  mixins: [],
  props: {

  },
  data () {
    return {
      sessionUid: sessionStorage.getItem('userId'),
      sessionCookie: sessionStorage.getItem('userCookie'),
      isplaying: true,
      songId: this.$route.query.id,
      songUrl: '',
      songDetail: [],
      songLyric: [],
      isLryShow: false
    }
  },
  computed: {

  },
  watch: {

  },
  mounted () {
    //  console.log(this.$refs);
    this.getSongUrl(),
    this.getSongDetail(),
    this.getSongLyric()
  },
  methods: {
    play: function () {
      if (this.$refs.audio.paused) {
        this.$refs.audio.play()
        this.isplaying = true
      } else {
        this.$refs.audio.pause()
        this.isplaying = false
      }
    },

    getSongUrl: function () {
      var that = this
      axios.get('https://www.terenzzzz.com:3002/song/url?id=' + this.songId + '&cookie=' + this.sessionCookie).then
      (function (response) {
        // console.log(response);
        that.songUrl = response.data.data[0].url
      }, function (err) {
        console.log(err)
      })
    },

    getSongDetail: function () {
      var that = this
      axios.get('https://www.terenzzzz.com:3002/song/detail?ids=' + this.songId).then
      (function (response) {
        console.log(response)
        that.songDetail = response.data.songs[0]
      }, function (err) {
        console.log(err)
      })
    },
    getSongLyric: function () {
      var that = this
      axios.get('https://www.terenzzzz.com:3002/lyric?id=' + this.songId).then
      (function (response) {
        // console.log(response);
        that.songLyric = response.data.lrc.lyric
      }, function (err) {
        console.log(err)
      })
    },

    fixLyric: function () {
      let arr
      arr = this.songLyric.split(/[(\r\n)\r\n]+/).map((item, i) => {
        let min = item.slice(1, 3)
        let sec = item.slice(4, 6)
        let mill = item.slice(7, 9)
        let lrc = item.slice(11, item.length)
        console.log(min, sec, mill, lrc)
        return {min, sec, mill, lrc}
      })
      // console.log(arr)
      return arr
    },

    changeLrcShow: function () {
      this.isLryShow = !this.isLryShow
    }

  }
}
</script>
<style lang='' scoped>
.musicLyric{
  width: 100%;
  height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  overflow-x:hidden;
}
.range{
  weight: 100%;
}

</style>

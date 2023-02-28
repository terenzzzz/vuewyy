<template>
  <div class="newBoard">
    <!-- 新歌榜单 -->
    <div class="row align-items-center mt-2 ps-2 pe-2 g-1">
      <!-- 榜单导航 -->
      <div class="row align-items-center mt-2 ps-2 pe-2 g-1">
        <div class="col-2 border-end"><span class="small" @click="goNewSongs">新歌</span></div>
        <div class="col-2 border-end"><span class="small" @click="goNewCds">新碟</span></div>
        <div class="col-3"><span class="small" @click="goNewAlbums">数字专辑</span></div>
        <div class="col-2"></div>
        <div class="col-3"><a href="#/allNewSong" class="small text-decoration-none text-black">更多</a></div>
      </div>
      <!-- 新歌榜内容 -->
      <div class="row align-items-center ps-2 pe-2 g-1" v-show="newSongsShow">
        <ul class="list-unstyled ">
          <li v-for="newSong in newSongs" :key="newSong">
            <div class="row align-items-center mt-2 ps-2 pe-2 g-1" @click="playSong(newSong.song.id)">
              <div class="col-2">
                <img :src="newSong.picUrl" class="img-fluid" alt="">
              </div>
              <div class="col-10 ">
                <span class="small">{{newSong.name}}</span>
                <br>
                <span class="small text-muted">{{newSong.song.artists[0].name}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- 新碟榜内容 -->
      <div class="row align-items-center ps-2 pe-2 g-1" v-show="newCdsShow">
        <ul class="list-unstyled ">
          <li v-for="newCd in newCds" :key="newCd">
            <div class="row align-items-center mt-2 ps-2 pe-2 g-1">
              <div class="col-2">
                <img :src="newCd.picUrl" class="img-fluid" alt="">
              </div>
              <div class="col-10 ">
                <span class="small">{{newCd.name}}</span>
                <br>
                <span class="small text-muted">{{newCd.artist.name}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- 新数字专辑内容 -->
      <div class="row align-items-center ps-2 pe-2 g-1" v-show="newAlbumsShow">
        <ul class="list-unstyled ">
          <li v-for="newAlbum in newAlbums" :key="newAlbum">
            <div class="row align-items-center mt-2 ps-2 pe-2 g-1">
              <div class="col-2">
                <img :src="newAlbum.coverUrl" class="img-fluid" alt="">
              </div>
              <div class="col-10 ">
                <span class="small">{{newAlbum.albumName}}</span>
                <br>
                <span class="small text-muted">{{newAlbum.artistName}}</span>
              </div>
            </div>
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
  name: 'NewBoard',
  components: {

  },
  mixins: [],
  props: {

  },
  data () {
    return {
      newSongs: [],
      newCds: [],
      newAlbums: [],
      newSongsShow: true,
      newCdsShow: false,
      newAlbumsShow: false
    }
  },
  mounted () {
    this.getNewSong(),
    this.getNewCd(),
    this.getNewAlbum()
  },
  methods: {
    getNewSong: function () {
      var that = this
      axios.get('http://localhost:3001/personalized/newsong?limit=5').then
      (function (response) {
        // console.log(response)
        that.newSongs = response.data.result
      }, function (err) {
        console.log(err)
      })
    },
    getNewCd: function () {
      var that = this
      axios.get('http://localhost:3001/top/album?offset=0&limit=5').then
      (function (response) {
        // console.log(response)
        that.newCds = response.data.weekData.slice(10, 15)
      }, function (err) {
        console.log(err)
      })
    },
    getNewAlbum: function () {
      var that = this
      axios.get('http://localhost:3001/album/list?limit=5').then
      (function (response) {
        // console.log(response)
        that.newAlbums = response.data.products
      }, function (err) {
        console.log(err)
      })
    },

    goNewCds: function () {
      this.newSongsShow = false
      this.newCdsShow = true
      this.newAlbumsShow = false
    },

    goNewSongs: function () {
      this.newSongsShow = true
      this.newCdsShow = false
      this.newAlbumsShow = false
    },

    goNewAlbums: function () {
      this.newSongsShow = false
      this.newCdsShow = false
      this.newAlbumsShow = true
    },
    playSong: function (songId) {
      this.$router.push({path: '/playView', query: {id: songId}})
    }
  }
}
</script>
<style lang='' scoped>
</style>

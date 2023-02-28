<template>
  <div class="singleList">
    <!-- 导航栏 -->
    <div class="row align-items-center bg-light pt-5 pb-3 ps-3 pe-3 navbar fixed-top">
      <div class="container">
        <div class="col-2">
          <a href="javascript:history.back()"><i class="fa-solid fa-chevron-left"></i></a>
        </div>
        <div class="col-8">
          歌单
        </div>
        <div class="col-2">
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </div>
    </div>

    <div class="body">
      <!-- 歌单详情 -->
      <div class="row mx-2 pb-2 border-bottom">
        <div class="col-5">
          <img :src="listDetail.coverImgUrl" class="img-fluid rounded-4" alt="">
        </div>
        <div class="col-7">
          <span class="fw-bold">{{listDetail.name}}</span>
          <br>
          <div class="row d-flex align-items-center mt-2 g-0">
            <div class="col-2">
              <img :src="listDetail.creator.avatarUrl" class="img-fluid rounded-circle" alt="">
            </div>
            <div class="col-5 ms-1">
              <span class="text-muted">{{listDetail.creator.nickname}}</span>
            </div>
            <div class="col-4">
              <button class="btn btn-light btn-sm"><i class="fa-solid fa-angle-right"></i></button>
            </div>
          </div>
          <div class="row g-0 mt-3">
            <div class="col-10">
              <p class="p1">{{listDetail.description}}</p>
            </div>
            <div class="col-2">
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- 歌曲列表 -->
      <div class="row align-items-center ps-2 pe-2 g-1">
        <ul class="list-unstyled ">
          <li v-for="listSong in listSongs" :key="listSong">
            <div class="row align-items-center mt-2 ps-2 pe-2 g-1" @click="playSong(listSong.id)">
              <div class="col-2">
                <img :src="listSong.al.picUrl" class="img-fluid" alt="">
              </div>
              <div class="col-8 ">
                <span class="small">{{listSong.name}}</span>
                <br>
                <span class="small text-muted m-1" v-for="artist in listSong.ar" :key="artist">{{artist.name}}</span>
              </div>
              <div class="col-2">
                <i class="fa-brands fa-youtube pe-2"></i>
                <i class="fa-solid fa-ellipsis-vertical"></i>
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
  name: 'SingleList',
  components: {

  },
  mixins: [],
  props: {

  },
  data () {
    return {
      listId: this.$route.query.id,
      listDetail: [],
      listSongs: []
    }
  },
  computed: {

  },
  watch: {

  },
  mounted () {
    this.getList()
  },
  methods: {
    getList: function () {
      var that = this
      axios.get('http://46.101.60.239:3001/playlist/detail?id=' + this.listId).then
      (function (response) {
        // console.log(response)
        that.listDetail = response.data.playlist
        that.listSongs = response.data.playlist.tracks
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
.p1{
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

</style>

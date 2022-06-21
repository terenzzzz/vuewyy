<template>
   <div class="boardDetail">

      <!-- 导航栏 -->
      <div class="row align-items-center bg-light pt-5 pb-3 ps-3 pe-3 navbar fixed-top">
         <div class="container">
               <div class="col-2">
                  <a href="javascript:history.back()"><i class="fa-solid fa-chevron-left"></i></a>
               </div>
               <div class="col-8">
                  {{this.boardName}}
               </div>
               <div class="col-2">
                  <i class="fa-solid fa-ellipsis-vertical"></i>
               </div>
         </div>
      </div>
      <div class="body">
			<!-- 操作 -->
			<div class="row align-items-center pt-3 ps-4 pe-4">
				<div class="col-4">
					<i class="fa-solid fa-circle-play"></i>
					<span>播放全部</span>
				</div>
				<div class="col-5"></div>
				<div class="col-3">
					<i class="fa-solid fa-arrow-down"></i>
				</div>
			</div>

			<!-- 音乐列表 -->
			<div class="row align-items-center mt-2 ps-2 pe-2 g-1">
				<ul class="list-unstyled ">
					<li v-for="(song,index) in songs " :key="song">
						<div class="row align-items-center mt-2 ps-2 pe-2 g-1">
							<div class="col-1">{{index+1}}.</div>
							<div class="col-2">
								<img :src="song.al.picUrl" class="img-fluid" alt="">
							</div>
							<div class="col-7 ">
								<span class="small">{{song.al.name}}</span>
								<br>
								<span class="small text-muted m-1" v-for="artist in song.ar" :key="artist">{{artist.name}}</span>
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
  name: 'BoardDetail',
  components: {

  },
  mixins: [],
  props: {

  },
  data () {
    return {
      boardId: this.$route.query.boardId,
      songs: [],
      boardName: ''
    }
  },
  computed: {

  },
  watch: {

  },
  mounted () {
    this.getListSongs()
  },
  methods: {
    getListSongs: function () {
      var that = this
      axios.get('https://wyyyyy.herokuapp.com/playlist/detail?id=' + this.boardId).then
      (function (response) {
        console.log(response)
        that.boardName = response.data.playlist.name
        that.songs = response.data.playlist.tracks
      }, function (err) {
        console.log(err)
      })
    }
  }
}
</script>
<style lang='' scoped>
</style>

<template>
<div class="recomend">
	<!-- 导航栏 -->
	<div class="row align-items-center bg-light pt-5 pb-3 ps-3 pe-3 navbar fixed-top">
		<div class="container">
			<div class="col-2">
				<a href="javascript:history.back()"><i class="fa-solid fa-chevron-left"></i></a>
			</div>
			<div class="col-8">
				今日推荐
			</div>
			<div class="col-2">
				<i class="fa-solid fa-ellipsis-vertical"></i>
			</div>
		</div>
	</div>

		<div class="body">
			<!-- 日期 -->
			<div class="row align-items-center mt-3 pt-5 ps-4 pe-4">
				<div class="col-6 ps-0">
					<div><strong class="display-3">{{month}}</strong> / <span>{{date}}</span></div>
					<span class="small">查看今日运势</span>
					<i class="fa-solid fa-chevron-right smll"></i>
				</div>
				<div class="col-2"></div>
				<div class="col-4"><span class="small">历史日推</span></div>
			</div>
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
					<li v-for="recomSong in recomSongs " :key="recomSong">
						<div class="row align-items-center mt-2 ps-2 pe-2 g-1" @click="playSong(recomSong.id)">
							<div class="col-2">
								<img :src="recomSong.al.picUrl" class="img-fluid" alt="">
							</div>
							<div class="col-8 ">
								<span class="small">{{recomSong.name}}</span>
								<br>
								<span class="small text-muted me-1" v-for="artist in recomSong.ar" :key="artist">{{artist.name}}</span>
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
  name: 'Recomend',
  data () {
    return {
      month: new Date().getMonth() + 1,
      date: new Date().getDate(),
      recomSongs: []
    }
  },
  mounted () {
    this.getRecomSongs()
  },
  methods: {
    getRecomSongs: function () {
      var that = this
      axios.post('http://localhost:3000/recommend/songs').then
      (function (response) {
        that.recomSongs = response.data.data.dailySongs
        console.log(response)
      }, function (err) {
        console.log(err)
      })
    },
    playSong: function (songId) {
      this.$router.push({path: '/playView', query: {id: songId}})
      // if(this.$route.fullPath == '/searchResult?id=' + songId){
      // 	window.location.reload();
      // }
    }
  }
}
</script>
<style lang='' scoped>
.body{
padding-top: 30px;
padding-bottom: 120px;
}
</style>

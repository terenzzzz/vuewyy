<template>
	<div class="recentPlay">
		<!-- 导航栏 -->
		<div class="row align-items-center bg-light pt-5 pb-3 ps-3 pe-3 navbar fixed-top">
			<div class="container">
				<div class="col-2">
					<a href="javascript:history.back()"><i class="fa-solid fa-chevron-left"></i></a>
				</div>
				<div class="col-8">
					最近播放
				</div>
				<div class="col-2">
					<i class="fa-solid fa-ellipsis-vertical"></i>
				</div>
			</div>
		</div>

		<div class="body">
			<!-- 操作 -->
			<div class="row align-items-center px-4">
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
					<li v-for="recentSong in recentSongs" :key="recentSong" @click="playSong(recentSong.song.id)">
						<div class="row align-items-center mt-2 ps-2 pe-2 g-1">
							<div class="col-2">
								<img :src="recentSong.song.al.picUrl" class="img-fluid" alt="">
							</div>
							<div class="col-8 ">
								<span class="small">{{recentSong.song.name}}</span>
								<br>
								<span class="small text-muted me-2" v-for="artist in recentSong.song.ar"
									:key="artist">{{artist.name}} - {{recentSong.song.al.name}}</span>
							</div>
							<div class="col-2">
								<i class="fa-brands fa-youtube pe-2"></i>
								<i class="fa-solid fa-ellipsis-vertical"></i>
							</div>
						</div>
					</li>
				</ul>
				<div class="clearRecentSongs">
					<i class="fa-solid fa-trash-can"></i>
					<span class="small">删除播放记录</span>
				</div>
			</div>
		</div>

	</div>
</template>
<!-- 导入axios包 -->
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
export default {
  name: 'RecentPlay',
  data () {
    return {
      recentSongs: [],
      sessionUid: sessionStorage.getItem('userId'),
      sessionCookie: sessionStorage.getItem('userCookie')
    }
  },
  mounted () {
    this.getRecentSongs()
  },
  methods: {
    getRecentSongs: function () {
      var that = this
      axios.post('http://localhost:3001/user/record?uid=' + this.sessionUid + '&type=1').then
      (function (response) {
        that.recentSongs = response.data.weekData
        console.log(response)
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
</style>;

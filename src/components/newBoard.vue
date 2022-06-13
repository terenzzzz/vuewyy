<template>
   <div class="newBoard">
      <!-- 新歌榜单 -->
			<div class="row align-items-center mt-2 ps-2 pe-2 g-1">
				<!-- 榜单导航 -->
				<div class="row align-items-center mt-2 ps-2 pe-2 g-1">
					<div class="col-2 border-end"><span class="small">新歌</span></div>
					<div class="col-2 border-end"><span class="small">新碟</span></div>
					<div class="col-3"><span class="small">数字专辑</span></div>
					<div class="col-2"></div>
					<div class="col-3"><span class="small">更多</span></div>
				</div>
				<!-- 榜单内容 -->
				<div class="row align-items-center ps-2 pe-2 g-1">
					<ul class="list-unstyled ">
						<li v-for="(newSong,index) in newSongs" :key="newSong">
							<div class="row align-items-center mt-2 ps-2 pe-2 g-1">
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
			</div>
   </div>
</template>
<script>
export default {
   name: 'NewBoard',
   components: {
     
   },
   mixins: [],
   props: {
     
   },
   data() {
     return {
      newSongs:{}
     }
   },
   computed: {
     
   },
   watch: {
     
   },
   mounted() {
    this.getNewSong()
   },
   methods: {
     getNewSong:function(){
			var that = this;
			axios.get("http://localhost:3000/personalized/newsong?limit=5").then
			(function (response){
				console.log(response)
				that.newSongs = response.data.result
			},function(err){
				console.log(err);
			})
    }
   }
};
</script>
<style lang='' scoped>
</style>
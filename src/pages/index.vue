<template>
  <div class="index">
		<!-- 搜索栏 -->
	 	<div class=" header row align-items-center bg-light pt-5 pb-3 ps-3 pe-3 navbar fixed-top g-0">
			<div class="container">
				<div class="col-1">
				  <i class="fa-solid fa-bars fa-2x"></i>
				</div>
				<div class="col-8">
					<input type="text" :placeholder="''+ searchKeyword" style="font-family:Arial,FontAwesome;width:100%">
				</div>
				<div class="col-1">
					<i class="fa-solid fa-microphone-lines fa-2x"></i>
				</div>
			</div>
		</div>

		<div class="body">
			<!-- 滚动播报 -->
			<div class="row align-items-center mt-3  ps-4 pe-4">
				<img :src="banner[0].pic" class="img-fluid" alt="Responsive image">
			</div>

			<!-- 导航栏 -->
			<div class="row align-items-center mt-2 ps-2 pe-2 g-1 bg-light ">
				<div class="row align-items-center mt-2 ps-2 pe-2 g-1">
					<div class="col-3"><a href="#/recomend" class="small text-decoration-none text-black">每日推荐</a></div>
					<div class="col-3"><span class="small">歌单</span></div>
					<div class="col-3"><span class="small">排行榜</span></div>
					<div class="col-3"><span class="small">FM电台</span></div>
				</div>
			</div>

			<RecomList></RecomList>
			<NewBoard></NewBoard>
      <HotTopic></HotTopic>
			<LeaderBoard></LeaderBoard>
	
		</div>
	</div>	

</template>


<script>
import RecomList from "../components/RecomList"
import NewBoard from "../components/NewBoard"
import LeaderBoard from "../components/LeaderBoard"
import HotTopic from "../components/HotTopic"
export default {
  name: 'Index',
	components:{
    RecomList,
		NewBoard,
		LeaderBoard,
    HotTopic
  },
  data() {
    return {
      searchKeyword:"芜湖芜湖",
      banner:[]
    }
	},
  mounted() {
    this.getSearchKeyword()
    this.getBanner()
   },
   methods: {
    getSearchKeyword:function(){
			var that = this;
			axios.get("http://localhost:3000/search/default").then
			(function (response){
				console.log(response)
				that.searchKeyword = response.data.data.showKeyword
			},function(err){
				console.log(err);
			})
    },
    getBanner:function(){
			var that = this;
			axios.get("http://localhost:3000/banner?type=2").then
			(function (response){
				console.log(response)
				that.banner = response.data.banners
			},function(err){
				console.log(err);
			})
    }
   }
}

</script>
<style lang='' scoped>
	.herder{
	}
	.footer{
		
	}

</style>
<template>
    <div class="LeaderBoard">
      <!-- 排行榜 -->
			<div class="row align-items-center mt-3 ps-2 pe-2 g-1">
				<!-- 排行榜导航 -->
				<div class="row align-items-center mt-2 ps-3 pe-3 g-1">
					<div class="col-2"><span class="small">排行榜</span></div>
					<div class="col-7"></div>
					<div class="col-3"><span class="small">更多</span></div>
				</div>

				<!-- 榜单 -->
				<div class="row align-items-center mt-2 ps-3 pe-3 g-1">
					<div class="card" >
						<div class="card-body">
							<h5 class="card-title">{{list.name}}</h5>
              <span class="small text-muted">{{list.description}}</span>
              <!-- 歌曲详情 -->
							<div class="row align-items-center mt-2 ps-1 pe-1 g-1">
								<div class="col-1"> 1. </div>
								<div class="col-2">
									<img src="../assets/song2.png" class="img-fluid" alt="">
									</div>
									<div class="col-9 ">
										<span class="small">近在千里-周柏豪</span>
									</div>
								
								<!-- <div class="col-1"> 2. </div>
								<div class="col-2">
									<img src="../assets/song2.png" class="img-fluid" alt="">
									</div>
									<div class="col-9 ">
										<span class="small">近在千里-周柏豪</span>
									</div>
								
								<div class="col-1"> 3. </div>
								<div class="col-2">
									<img src="../assets/song2.png" class="img-fluid" alt="">
									</div>
									<div class="col-9 ">
										<span class="small">近在千里-周柏豪</span>
									</div> -->
							</div>
						</div>
					</div>
				</div>
			</div>
   </div>
</template>
<script>
export default {
   name: 'LeaderBoard',
   components: {
     
   },
   mixins: [],
   props: {
     
   },
   data() {
     return {
      list:[],
      listId:"",
      listSongs:[]
     }
   },
   computed: {
     
   },
   watch: {
     
   },
   mounted() {
    this.getList()
    // this.getListSongs()
   },
   methods: {
    getList:function(){
      var that = this;
      axios.get("http://localhost:3000/toplist/detail").then
      (function (response){
        console.log(response)
        that.list = response.data.list[0]
        that.listId = response.data.list[0].id
      },function(err){
        console.log(err);
      })
    },
    // getListSongs:function(){
    //   var that = this;
    //   let params = {id:this.listId}
    //   axios.get("http://localhost:3000/playlist/track/all").then
    //   (function (response){
    //     console.log(response)
    //     that.listSongs = response.data.songs
    //   },function(err){
    //     console.log(err);
    //   })
    // }
   }
};
</script>
<style lang='' scoped>
</style>
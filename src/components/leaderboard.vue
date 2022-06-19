<template>
    <div class="LeaderBoard">
      <!-- 排行榜 -->
			<div class="row align-items-center mt-3 ps-2 pe-2 g-1">
				<!-- 排行榜导航 -->
				<div class="row align-items-center mt-2 ps-3 pe-3 g-1">
					<div class="col-2"><span class="small">排行榜</span></div>
					<div class="col-7"></div>
					<div class="col-3"><a href="#/RankBoard" class="small text-decoration-none text-black">更多</a></div>
				</div>
				<!-- 榜单 -->
        <div>
          <div class="overflow-scroll" >
            <div class="row" style="width: 100%;overflow-x: auto;overflow-y: hidden; white-space: nowrap;display: inline-block;">
              <div class="col-5 border mx-2" v-for="(list,index) in lists" :key="list" style="display: inline-block;vertical-align: top;" @click="goList(list.id)">
                <div class="row mt-2">
                  <img :src="list.coverImgUrl" class="img-fluid"  alt="">
                  <h5>{{list.name}}</h5>
                </div>
                <div class="row ">
                  <p class="small text-muted d-flex align-items-center p1" style="height: 150px; word-break: break-all; white-space: normal;">{{list.description}}</p>
                </div>
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
      lists:[],
      listId:"",

     }
   },
   computed: {
     
   },
   watch: {
     
   },
   mounted() {
    this.getList();
   },
   methods: {
    getList:function(){
      var that = this;
      axios.get("http://localhost:3000/toplist/detail").then
      (function (response){
        // console.log(response)
        that.lists = response.data.list.slice(0,5)
      },function(err){
        console.log(err);
      })
      
    },

    getListSongs1:function(id){
      var that = this
      axios.get("http://localhost:3000/playlist/detail?id=" + id).then
      (function (response){
         that.listSongs1 = response.data.playlist.tracks.slice(0,5)
      },function(err){
        console.log(err);
      })
    },
    goList:function(listId){
		  this.$router.push({path: '/singleList', query:{id:listId}});
		}
   }
};
</script>
<style lang='' scoped>

</style>
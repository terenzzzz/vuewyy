<template>
   <div>
     <!-- 导航栏 -->
	 	<div class="row align-items-center bg-light pt-5 pb-3 ps-3 pe-3 navbar fixed-top">
			<div class="container">
				<div class="col-2">
					<a href="javascript:history.back()"><i class="fa-solid fa-chevron-left"></i></a>
				</div>
				<div class="col-8">
					新歌推荐
				</div>
				<div class="col-2">
					<i class="fa-solid fa-ellipsis-vertical"></i>
				</div>
			</div>
		</div>

    <div class="body">
      <!-- 搜索分类 -->

      <div class="category">
        <div class="row g-0">
          <div class="col-2" @click="newAll"><span>全部</span></div>
          <div class="col-2" @click="newCn"><span>华语</span></div>
          <div class="col-2" @click="newEa"><span>欧美</span></div>
          <div class="col-2" @click="newJp"><span>日本</span></div>
          <div class="col-2" @click="newKr"><span>韩国</span></div>
        </div> 
      </div>
      
      <!-- 全部列表 -->
      <div class="card m-2" v-for="(allsong,index) in allsongs" :key="allsong" v-show="newShow == '全部'">
        <div class="row align-items-center my-2 ps-2 pe-2 g-1" @click="playSong(allsong.id)">
          <div class="col-2">
            <img :src="allsong.album.picUrl" class="img-fluid " alt="">
          </div>
          <div class="col-8">
            <span>{{allsong.name}}</span>
            <br>
            <span class="small text-muted m-1" v-for="(artist,index) in allsong.artists" :key="artist">{{artist.name}}</span>
          </div>
          <div class="col-2">
            <i class="fa-brands fa-youtube pe-2"></i>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
      </div>

      <!-- 华语列表 -->
      <div class="card m-2" v-for="(cn,index) in cns" :key="cn" v-show="newShow == '华语'">
        <div class="row align-items-center my-2 ps-2 pe-2 g-1" @click="playSong(cn.id)">
          <div class="col-2">
            <img :src="cn.album.picUrl" class="img-fluid " alt="">
          </div>
          <div class="col-8">
            <span>{{cn.name}}</span>
            <br>
            <span class="small text-muted m-1" v-for="(artist,index) in cn.artists" :key="artist">{{artist.name}}</span>
          </div>
          <div class="col-2">
            <i class="fa-brands fa-youtube pe-2"></i>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
      </div>

      <!-- 欧美列表 -->
      <div class="card m-2" v-for="(ea,index) in eas" :key="ea" v-show="newShow == '欧美'">
        <div class="row align-items-center my-2 ps-2 pe-2 g-1" @click="playSong(ea.id)">
          <div class="col-2">
            <img :src="ea.album.picUrl" class="img-fluid " alt="">
          </div>
          <div class="col-8">
            <span>{{ea.name}}</span>
            <br>
            <span class="small text-muted m-1" v-for="(artist,index) in ea.artists" :key="artist">{{artist.name}}</span>
          </div>
          <div class="col-2">
            <i class="fa-brands fa-youtube pe-2"></i>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
      </div>

       <!-- 日本列表 -->
      <div class="card m-2" v-for="(jp,index) in jps" :key="jp" v-show="newShow == '日本'">
        <div class="row align-items-center my-2 ps-2 pe-2 g-1" @click="playSong(jp.id)">
          <div class="col-2">
            <img :src="jp.album.picUrl" class="img-fluid " alt="">
          </div>
          <div class="col-8">
            <span>{{jp.name}}</span>
            <br>
            <span class="small text-muted m-1" v-for="(artist,index) in jp.artists" :key="artist">{{artist.name}}</span>
          </div>
          <div class="col-2">
            <i class="fa-brands fa-youtube pe-2"></i>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
      </div>

       <!-- 韩国列表 -->
      <div class="card m-2" v-for="(kr,index) in krs" :key="ea" v-show="newShow == '韩国'">
        <div class="row align-items-center my-2 ps-2 pe-2 g-1" @click="playSong(kr.id)">
          <div class="col-2">
            <img :src="kr.album.picUrl" class="img-fluid " alt="">
          </div>
          <div class="col-8">
            <span>{{kr.name}}</span>
            <br>
            <span class="small text-muted m-1" v-for="(artist,index) in kr.artists" :key="artist">{{artist.name}}</span>
          </div>
          <div class="col-2">
            <i class="fa-brands fa-youtube pe-2"></i>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
      </div>


    </div>
   </div>
</template>
<script>
export default {
   name: 'AllNewSong',
   components: {
     
   },
   mixins: [],
   props: {
     
   },
   data() {
     return {
       allsongs:[],
       cns:[],
       eas:[],
       krs:[],
       jps:[],
       newShow:"全部"
     }
   },
   computed: {
     
   },
   watch: {
     
   },
   mounted() {
     this.newAll()
   },
   methods: {
     newAll:function(){
      var that = this;
			axios.get("https://wyyyyy.herokuapp.com/top/song?type=0").then
			(function (response){
        // console.log(response)
        that.allsongs = response.data.data
        that.newShow = "全部"
			},function(err){
				console.log(err);
			})
    },

    newCn:function(){
      var that = this;
			axios.get("https://wyyyyy.herokuapp.com/top/song?type=7").then
			(function (response){
        // console.log(response)
        that.cns = response.data.data
        that.newShow = "华语"
			},function(err){
				console.log(err);
			})
    },

    newEa:function(){
      var that = this;
			axios.get("https://wyyyyy.herokuapp.com/top/song?type=96").then
			(function (response){
        console.log(response)
        that.eas = response.data.data
        that.newShow = "欧美"
			},function(err){
				console.log(err);
			})
    },

    newJp:function(){
      var that = this;
			axios.get("https://wyyyyy.herokuapp.com/top/song?type=8").then
			(function (response){
        console.log(response)
        that.jps = response.data.data
        that.newShow = "日本"
			},function(err){
				console.log(err);
			})
    },

    newKr:function(){
      var that = this;
			axios.get("https://wyyyyy.herokuapp.com/top/song?type=16").then
			(function (response){
        console.log(response)
        that.krs = response.data.data
        that.newShow = "韩国"
			},function(err){
				console.log(err);
			})
    },
    playSong:function(songId){
		this.$router.push({path: '/playView', query:{id:songId}});
		// if(this.$route.fullPath == '/searchResult?id=' + songId){
		// 	window.location.reload();
		// }
	}

   }
};
</script>
<style lang='' scoped>
</style>
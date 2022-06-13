<template>
  <div class="recomList">
    <!-- 推荐歌单栏 -->
		<div class="row align-items-center mt-2 ps-2 pe-2 g-1">
			<!-- 排行榜导航 -->
			<div class="row  mt-2 ps-2 pe-2 g-1">
				<div class="col-3 "><span class="small">推荐歌单</span></div>
				<div class="col-6"></div>
				<div class="col-3"><span class="small">更多</span></div>
			</div>

			<div class="col-4" v-for="(recomend,index) in recomList" :key="recomend">
				<img :src= 'recomend.picUrl' class="img-fluid" alt="" >
				<span class="small">{{recomend.name}}</span>
			</div>
		</div>
   </div>
</template>
<script>
export default {
   name: 'RecomList',
   components: {
     
   },
   mixins: [],
   props: {
     
   },
   data() {
     return {
      recomList:[],
     }
   },
   computed: {
     
   },
   watch: {
     
   },
   mounted() {
    this.getRecomList()
   },
  methods: {
		getRecomList:function(){
			var that = this;
			axios.get("http://localhost:3000/personalized?limit=3").then
			(function (response){
				console.log(response)
				that.recomList = response.data.result
			},function(err){
				console.log(err);
			})
    }
  }
};
</script>
<style lang='' scoped>
</style>
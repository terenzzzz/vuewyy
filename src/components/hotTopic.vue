<template>
  <div class="hotTopic">
    <!-- 热门话题 -->
		<div class="row mt-2 ps-1 pe-2 g-1">
			<!-- 排行榜导航 -->
			<div class="row  mt-2 ps-2 pe-2 g-1" >
				<div class="col-3 "><span class="small">热门话题</span></div>
				<div class="col-6"></div>
				<div class="col-3"><span class="small">更多</span></div>
			</div>

			<div class="row  mt-2 ps-2 pe-2 g-1" v-for="(topic,index) in hotTopics" :key="topic">
				<div class="col-8 "><i class="fa-solid fa-hashtag"></i><span class="small">{{topic.title}}</span></div>
				<div class="col-4"><span class="small text-muted">{{topic.participateCount}}热度</span></div>
			</div>

		</div>
  </div>

</template>
<script>
export default {
   name: 'HotTopic',
   components: {
     
   },
   mixins: [],
   props: {
     
   },
   data() {
     return {
      hotTopics:[]
     }
   },
   mounted() {
    this.getHotTopic()
   },
   methods: {
    getHotTopic:function(){
      var that = this;
      axios.get("http://localhost:3000/hot/topic?limit=3").then
      (function (response){
        console.log(response)
        that.hotTopics = response.data.hot
      },function(err){
        console.log(err);
      })
   }
	}
}
</script>
<style lang='' scoped>
</style>
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

      <div class="row" style="width: 100%;overflow-x: auto;overflow-y: hidden; white-space: nowrap;display: inline-block;">
        <div class="w-50" v-for="(topic,index) in hotTopics.slice(0,3)" :key="topic" style="width:28%;height:30px;margin-right: 30px;display: inline-block;">
          <div class="d-flex justify-content-start" >
            <i class="fa-solid fa-hashtag"></i><span class="small me-1">{{topic.title}}</span>
            <span class="small text-muted">{{topic.participateCount}}热度</span>
          </div>
          
        </div>
        <br>
        <div class="w-50" v-for="(topic,index) in hotTopics.slice(3,6)" :key="topic" style="width:28%;height:30px; margin-right: 30px;display: inline-block;">
          <div class="d-flex justify-content-start" >
            <i class="fa-solid fa-hashtag"></i><span class="small me-1">{{topic.title}}</span>
            <span class="small text-muted">{{topic.participateCount}}热度</span>
          </div>
        </div>
        <br>
        <div class="w-50" v-for="(topic,index) in hotTopics.slice(6,9)" :key="topic" style="width:28%;height:30px; margin-right: 30px;display: inline-block;">
          <div class="d-flex justify-content-start" >
            <i class="fa-solid fa-hashtag"></i><span class="small me-1">{{topic.title}}</span>
            <span class="small text-muted">{{topic.participateCount}}热度</span>
          </div>
        </div>
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
      axios.get("https://wyyyyy.herokuapp.com/hot/topic?limit=9").then
      (function (response){
        // console.log(response)
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
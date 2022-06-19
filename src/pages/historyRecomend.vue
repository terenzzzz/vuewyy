<template>
   <div class="historyRecomend">
     <!-- 导航栏 -->
	 	<div class="row align-items-center bg-light pt-5 pb-3 ps-3 pe-3 navbar fixed-top">
			<div class="container">
				<div class="col-2">
					<a href="javascript:history.back()"><i class="fa-solid fa-chevron-left"></i></a>	
				</div>
				<div class="col-8">
					历史推荐
				</div>
				<div class="col-2">
					<i class="fa-solid fa-ellipsis-vertical"></i>
				</div>
			</div>
		</div>
   </div>
</template>
<script>
export default {
   name: 'HistoryRecomend',
   components: {
     
   },
   mixins: [],
   props: {
     
   },
   data() {
     return {
			year:new Date().getFullYear(),
      month:new Date().getMonth() + 1,
			date:new Date().getDate(),
     }
   },
   computed: {
     
   },
   watch: {
     
   },
   mounted() {
		this.correctMonth(),
    this.getHistoryList()
   },
   methods: {
		correctMonth:function(){
			if (this.month < 10){
				this.month =  "0"+ this.month
			}
		},
		getHistoryList:function(){
			var that = this;
			axios.get("http://localhost:3000/history/recommend/songs/detail?date=" + this.year + '-' + this.month + '-' + this.date).then
			(function (response){
				console.log(response)

			},function(err){
				console.log(err);
			})
		},
   }
};
</script>
<style lang='' scoped>
</style>
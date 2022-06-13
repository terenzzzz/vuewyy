<template>
	<div class="index">
		<!-- 导航栏 -->
	 	<div class="row align-items-center bg-light pt-5 pb-3 ps-3 pe-3 navbar fixed-top">
			<div class="container">
				<div class="col-2">
					<i class="fa-solid fa-chevron-left"></i>
				</div>
				<div class="col-8">
					今日推荐
				</div>
				<div class="col-2">
					<i class="fa-solid fa-ellipsis-vertical"></i>
				</div>
			</div>
		</div>

		<div class="body">
			<!-- 日期 -->
			<div class="row align-items-center mt-3 pt-5 ps-4 pe-4">
				<div class="col-6 ps-0">
					<div><strong class="display-3">{{month}}</strong> / <span>{{date}}</span></div>
					<span class="small">查看今日运势</span>
					<i class="fa-solid fa-chevron-right smll"></i>
				</div>
				<div class="col-2"></div>
				<div class="col-4"><span class="small">历史日推</span></div>
			</div>
			<!-- 操作 -->
			<div class="row align-items-center pt-3 ps-4 pe-4">
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
					<li>
						<div class="row align-items-center mt-2 ps-2 pe-2 g-1">
							<div class="col-2">
							<img src="../assets/song1.jpg" class="img-fluid" alt="">
							</div>
							<div class="col-8 ">
								<span class="small">我不如-曾比特</span>
							</div>
							<div class="col-2">
								<i class="fa-brands fa-youtube pe-2"></i>
								<i class="fa-solid fa-ellipsis-vertical"></i>
							</div>
						</div>
					</li>
					<li>
						<div class="row align-items-center mt-2 ps-2 pe-2 g-1">
							<div class="col-2">
								<img src="../assets/song2.png" class="img-fluid" alt="">
							</div>
							<div class="col-8 ">
								<span class="small">近在千里-周柏豪</span>
							</div>
							<div class="col-2">
								<i class="fa-brands fa-youtube pe-2"></i>
								<i class="fa-solid fa-ellipsis-vertical"></i>
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
   name: 'Recomend',
   data() {
     return {
			full:new Date().getUTCMonth(),
			month:new Date().getMonth() + 1,
      date:new Date().getDate()
     }
   },
   methods: {
     
   }
};
</script>
<style lang='' scoped>
	.body{
		padding-top: 30px;
		padding-bottom: 120px;
	}
</style>
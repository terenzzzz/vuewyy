<template>
	<!-- 页脚 -->
	<div class="footer navbar fixed-bottom bg-light ">
		<div class="container">

			<div class="row mx-auto d-flex align-items-center border-bottom">
				<div class="col-2">
					<i class="fa-solid fa-compact-disc display-6"></i>
				</div>
				<div class="col-6">
					<span>我不如-曾比特</span>
				</div>
				<div class="col-2">
					<i class="fa-solid fa-circle-pause fa-lg"></i>
				</div>
				<div class="col-2">
					<i class="fa-solid fa-bars fa-lg" ></i>
				</div>
			</div>

			<div class="row align-items-center mt-2">
				<div class="col-1"></div>
				<div class="col-2">
					<a href="#/" class="small text-decoration-none text-black">
						<i class="fa-solid fa-globe display-6"></i>
						<br>
						<span>发现</span>
					</a>
				</div>
				<div class="col-2">
					<i class="fa-solid fa-headphones display-6"></i>
					<span class="small">播客</span>
				</div>
				<div class="col-2">
					<a href="#/myhome" class="small text-decoration-none text-black">
						<i class="fa-solid fa-user-astronaut display-6 "></i>
						<br>
						<span>我的</span>
					</a>
				</div>
				<div class="col-2">
					<i class="fa-solid fa-user-group display-6"></i>
					<span class="small">关注</span>
				</div>
				<div class="col-2">
					<i class="fa-solid fa-house display-6"></i>
					<br>
					<span>社区</span>
				</div>
				<div class="col-1"></div>
			</div>
			<div class="mx-auto mb-0" ><p class="text-muted">@Terence{{year}}</p></div>
		</div>
	</div>

</template>
<script>
export default {
   name: 'Footer',
   components: {
     
   },

   data() {
     return {
      year:new Date().getFullYear()
     }
   },
};
</script>
<style lang='' scoped>
</style>
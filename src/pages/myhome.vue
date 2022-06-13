<template>
  <div class="myhome">
    <!-- 导航栏 -->
    <div class="row  bg-light pt-5 pb-3 ps-3 pe-3 navbar fixed-top">
      <div class="container">
        <div class="col-2">
          <i class="fa-solid fa-bars"></i>
        </div>
        <div class="col-8"></div>
        <div class="col-2">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </div>
    
    <div class="body">
      <!-- 个人信息 -->
      <div class="card mx-4 rounded-5 bg-light">
        <div class="row">
          <div class="mx-auto pt-2">
            <img src="../assets/beluga.jpg" class="rounded-circle mb-3" style="width:70px;" alt="Avatar" />
          </div>
          <h5 class="mb-2"><strong>John Doe</strong><span class="badge bg-dark ms-2">VIP</span></h5>
          <div class="row d-flex justify-content-center g-0">
            <div class="col-2"><span>关注: 8</span></div>
            <div class="col-2"><span>粉丝: 8</span></div>
            <div class="col-2"><span>lv. 8</span></div>
          </div>
        </div>
      </div>
      <!-- 功能区 -->
      <div class="card mx-4 rounded-4 bg-light mt-3">
        <div class="row p-2">
          <div class="col-3">
            <i class="fa-solid fa-circle-play"></i>
            <br>
            <span class="small">最近播放</span>
          </div>
          <div class="col-3">
            <i class="fa-solid fa-circle-arrow-down"></i>
            <br>
            <span class="small">本地</span>
          </div>
          <div class="col-3">
            <i class="fa-solid fa-cloud"></i>
            <br>
            <span class="small">云盘</span>
          </div>
          <div class="col-3">
            <i class="fa-solid fa-user-group"></i>
            <br>
            <span class="small">我的好友</span>
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <i class="fa-solid fa-star"></i>
            <br>
            <span class="small">收藏和赞</span>
          </div>
          <div class="col-3">
            <i class="fa-solid fa-podcast"></i>
            <br>
            <span class="small">我的播客</span>
          </div>
          <div class="col-3"></div>
          <div class="col-3"></div>
        </div>
      </div>

      <!-- 我的喜欢 -->
      <div class="card mx-4 rounded-3 bg-light mt-3">
        <div class="row p-3 d-flex align-items-center g-0">
          <div class="col-3"><img src="../assets/song1.jpg" class="img-fluid" alt=""></div>
          <div class="col-5">
            <span class="small">我喜欢的音乐</span>
            <br>
            <span class="small text-muted">257首</span>
          </div>
          <div class="col-4">
            <i class="fa-solid fa-heart-pulse"></i>
            <br>
            <span class="small">心动模式</span>
          </div>
        </div>
      </div>

      <!-- 导航栏 -->
      <div class="row mt-3 ps-2 pe-2 g-1">
        <div class="col-4 border-end"><span class="small">创建歌单</span></div>
        <div class="col-4 border-end"><span class="small">收藏歌单</span></div>
        <div class="col-3"><span class="small">歌单助手</span></div>
      </div>

      <!-- 歌单列表 -->
      <div class="card mx-4 rounded-3 bg-light mt-2 pb-2">
        <div class="row p-3 ">
          <div class="col-5"><span class="small">收藏歌单(52个)</span></div>
          <div class="col-5"></div>
          <div class="col-2"><i class="fa-solid fa-ellipsis-vertical"></i></div>
        </div>

				<div class="row ps-3 d-flex align-items-center g-0">
          <div class="col-2">
            <img src="../assets/cover1.jpg" class="img-fluid" alt="">
          </div>
          <div class="col-10">
            <span class="small">【单曲循环】开口爱上的英文歌</span>
            <br>
            <span class="small text-muted">410首,by Terenzzzz</span>
          </div>
				</div>

        <div class="row ps-3 d-flex align-items-center g-0 mt-2">
          <div class="col-2">
            <img src="../assets/cover2.jpg" class="img-fluid" alt="">
          </div>
          <div class="col-10">
            <span class="small">今天从《Mood》听起|私人雷达</span>
            <br>
            <span class="small text-muted">410首,by Terenzzzz</span>
          </div>
				</div>

        <div class="row ps-3 d-flex align-items-center g-0 mt-2">
          <div class="col-2">
            <img src="../assets/cover3.jpg" class="img-fluid" alt="">
          </div>
          <div class="col-10">
            <span class="small">【粤语专场】温室效应 不懂争取</span>
            <br>
            <span class="small text-muted">410首,by Terenzzzz</span>
          </div>
				</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
   name: 'Myhome',
   components: {
     
   },
   data() {
     return {
       
     }
   },

   methods: {
     
   }
};
</script>
<style lang='' scoped>
  
</style>
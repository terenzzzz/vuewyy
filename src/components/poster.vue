<template>
<div class="swipe" id="swipe">
  <div class="img-box" id="swipe_img_box">
    <a>
      <img v-for="(banner,index) in banners" :key="index" :src="banner.pic" 
            v-show="currentIndex==index"  @mouseenter="clear" @mouseout="changeIndex"
            class="img-fluid px-4 " style="height:170px">
    </a>
  </div>
  <div class="select" id="swipe_select">
    <ul class="slide-index ">
      <div class="row ">
        <div class="col-12 pt-2 d-flex align-items-center">
          <li class="item" v-for="(v,i) in banners" :key="i" :class="currentIndex==i?'active':''
            " @mouseenter="clear" @mouseout="changeIndex" @click="goToIndex(i)"></li>
        </div>
      </div>
    </ul>
  </div>
</div>
</template>
<script>
export default {
   name: 'Poster',
   components: {
     
   },
   mixins: [],
   props: {
     
   },
   data() {
     return {
       banners:[],
        currentIndex: 0,
        interId: null
     }

   },
   computed: {
     
   },
   watch: {
     
   },
   mounted() {
    this.getBanner()
    this.changeIndex()
   },
   methods: {
     getBanner:function(){
			var that = this;
			axios.get("http://localhost:3000/banner?type=2").then
			(function (response){
				// console.log(response)
				that.banners = response.data.banners
			},function(err){
				console.log(err);
			})
    },

    changeIndex:function(){
      this.interId = setInterval(()=>{
        this.currentIndex++;
        if(this.currentIndex == this.banners.length){
          this.currentIndex = 0;
        }
      },3000)
    },
    clear:function(){
      clearInterval(this.interId)
    },

    pre:function(){
      if(this.currentIndex == 0){
        this.currentIndex = this.banners.length;
      }
      this.currentIndex--;
    },
    next:function(){
      this.currentIndex++
      if(this.currentIndex == this.banners.length){
        this.currentIndex = 0;
      }
    },
    goToIndex:function(index){
      this.currentIndex = index
    }

   }
};
</script>
<style lang='' scoped>
.item{
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  margin: 0 10px;
  /* 阴影 */
  box-shadow: 0 2px 5px rgba(0,0,0,0.4);
}
.active{
  background-color: black;
}
</style>
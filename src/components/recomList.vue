<template>
  <div class="recomList">
    <!-- 推荐歌单栏 -->
    <div class="row align-items-center mt-2 ps-2 pe-2 g-1">
      <!-- 排行榜导航 -->
      <div class="row  mt-2 ps-2 pe-2 g-1">
        <div class="col-3 "><span class="small">推荐歌单</span></div>
        <div class="col-6"></div>
        <div class="col-3"><a href="#/SongList" class="small text-decoration-none text-black">更多</a></div>
      </div>

      <div class="h-100" style="width: 100%;overflow-x: auto;overflow-y: hidden;white-space: nowrap;">
        <div v-for="recomend in recomList" :key="recomend"
          style="width:28%; margin-right: 10px;display: inline-block;vertical-align:top" @click="goList(recomend.id)">
          <img :src='recomend.picUrl' class="img-fluid" alt="">
          <p style="word-break: break-all; white-space: normal;">{{recomend.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- 导入axios包 -->
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
export default {
  name: 'RecomList',
  components: {

  },
  mixins: [],
  props: {

  },
  data () {
    return {
      recomList: []
    }
  },
  computed: {

  },
  watch: {

  },
  mounted () {
    this.getRecomList()
  },
  methods: {
    getRecomList: function () {
      var that = this
      axios.get('https://www.terenzzzz.com:3002/personalized?limit=10').then
      (function (response) {
        // console.log(response)
        that.recomList = response.data.result
      }, function (err) {
        console.log(err)
      })
    },
    goList: function (listId) {
      this.$router.push({path: '/singleList', query: {id: listId}})
    }

  }
}
</script>
<style lang='' scoped>
#list{
  white-space:nowrap;
}
</style>

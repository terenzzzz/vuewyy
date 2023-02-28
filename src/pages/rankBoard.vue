<template>
  <div class="rankBoard">
    <!-- 导航栏 -->
    <div class="row align-items-center bg-light pt-5 pb-3 ps-3 pe-3 navbar fixed-top">
      <div class="container">
        <div class="col-2">
          <a href="javascript:history.back()"><i class="fa-solid fa-chevron-left"></i></a>
        </div>
        <div class="col-8">
          排行榜
        </div>
        <div class="col-2">
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </div>
    </div>
    <div class="body">
      <div class="card mx-3 mb-3 bg-light" v-for="item in list" :key="item" @click="goBoardDetail(item.id)">
        <div class="row m-3 d-lex align-items-center">
          <div class="col-3"><img :src="item.coverImgUrl" alt="" class="img-fluid"></div>
          <div class="col-6">
            <span>{{item.name}}</span>
            <br>
            <span class="text-muted">{{item.updateFrequency}}</span>
            <!-- <span class="text-muted">{{item.description}}</span> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- 导入axios包 -->
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
export default {
  name: 'RankBoard',
  components: {

  },
  mixins: [],
  props: {

  },
  data () {
    return {
      list: []
    }
  },
  computed: {

  },
  watch: {

  },
  mounted () {
    this.getList()
  },
  methods: {
    getList: function () {
      var that = this
      axios.get('http://46.101.60.239:3001/toplist/detail').then
      (function (response) {
        console.log(response)
        that.list = response.data.list
      }, function (err) {
        console.log(err)
      })
    },

    goBoardDetail: function (id, name) {
      this.$router.push({
        path: '/boardDetail',
        query: {boardId: id}
      })
    }
  }
}
</script>
<style lang='' scoped>
</style>

<template>
	<div class="songList">
		<!-- 导航栏 -->
    <div class="row align-items-center bg-light pt-5 pb-3 ps-3 pe-3 navbar fixed-top">
			<div class="container">
				<div class="col-2">
					<a href="javascript:history.back()"><i class="fa-solid fa-chevron-left"></i></a>
				</div>
				<div class="col-8">
					歌单广场
				</div>
				<div class="col-2">
					<i class="fa-solid fa-ellipsis-vertical"></i>
				</div>
			</div>
		</div>

		<div class="body">
			<!-- 歌单分类 -->
			<div class="category">
				<div class="row g-0">
					<div class="col-2" v-for="category in categories" :key="category"><span>{{category.name}}</span></div>
					<div class="col-2"><span @click="getAllCategories"><i class="fa-solid fa-bars" ></i></span></div>
				</div>
				<div class="row g-0  mt-1 border-bottom px-2" v-show="allShow">
					<div class="col-2" v-for="all in allCategories" :key="all"><span>{{all.name}}</span></div>
				</div>
			</div>
		</div>
	</div>
</template>
<!-- 导入axios包 -->
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
export default {
  name: 'SongList',
  components: {

  },
  mixins: [],
  props: {

  },
  data () {
    return {
      categories: [],
      allCategories: [],
      allShow: false

    }
  },
  computed: {

  },
  watch: {

  },
  mounted () {
    this.getCategories()
  },
  methods: {
    getCategories: function () {
      var that = this
      axios.post('https://wyyyyy.herokuapp.com/playlist/hot').then
      (function (response) {
        // console.log(response)
        that.categories = response.data.tags.slice(0, 5)
      }, function (err) {
        console.log(err)
      })
    },

    getAllCategories: function () {
      var that = this
      axios.post('https://wyyyyy.herokuapp.com/playlist/hot').then
      (function (response) {
        console.log(response)
        that.allCategories = response.data.tags.slice(5, 10)
        that.allShow = !that.allShow
      }, function (err) {
        console.log(err)
      })
    }

  }
}
</script>
<style lang='' scoped>
</style>

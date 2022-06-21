<template>
  <div class="index">
    <!-- 导航栏 -->
    <SideBar></SideBar>

    <div class="body">
        <!-- 滚动播报 -->
      <Poster></Poster>

			<!-- 导航栏 -->
			<div class="row align-items-center mt-2 ps-2 pe-2 g-1 bg-light ">
				<div class="row align-items-center mt-2 ps-2 pe-2 g-1">
					<div class="col-3"><a href="#/recomend" class="small text-decoration-none text-black">每日推荐</a></div>
					<div class="col-3"><a href="#/SongList" class="small text-decoration-none text-black">歌单</a></div>
					<div class="col-3"><a href="#/RankBoard" class="small text-decoration-none text-black">排行榜</a></div>
					<div class="col-3"><span class="small">FM电台</span></div>
				</div>
			</div>
			<RecomList></RecomList>
			<NewBoard></NewBoard>
      <HotTopic></HotTopic>
			<LeaderBoard></LeaderBoard>

		</div>
	</div>

</template>

<script>
import RecomList from '../components/recomList'
import NewBoard from '../components/newBoard'
import LeaderBoard from '../components/leaderBoard'
import HotTopic from '../components/hotTopic'
import SideBar from '../components/sideBar'
import Poster from '../components/poster'

export default {
  name: 'Index',
  components: {
    RecomList,
    NewBoard,
    LeaderBoard,
    HotTopic,
    SideBar,
    Poster

  },
  data () {
    return {
      sessionUid: sessionStorage.getItem('userId'),
      sessionCookie: sessionStorage.getItem('userCookie')
    }
  },
  mounted () {
  },
  methods: {

  }
}

</script>
<style lang='' scoped>

</style>

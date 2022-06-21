import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Recomend from '@/pages/recomend'
import Myhome from '@/pages/myhome'
import Login from '@/pages/login'
import MobileLogIn from '@/pages/mobileLogIn'
import PasswordLogIn from '@/pages/passwordLogIn'
import RecentPlay from '@/pages/recentPlay'
import SongList from '@/pages/songList'
import TestSide from '@/pages/testSide'
import HistoryRecomend from '@/pages/historyRecomend'
import RankBoard from '@/pages/rankBoard'
import BoardDetail from '@/pages/boardDetail'
import SearchResult from '@/pages/searchResult'
import AllNewSong from '@/pages/allNewSong'
import PlayView from '@/pages/playView'
import SingleList from '@/pages/singleList'
import MyLike from '@/pages/myLike'
Vue.use(Router)
export default new Router({
  routes: [
    {path: '/', name: 'Index', component: Index},
    {path: '/recomend', name: 'Recomend', component: Recomend},
    {path: '/myhome', name: 'Myhome', component: Myhome},
    {path: '/login', name: 'Login', component: Login},
    {path: '/mobileLogin', name: 'MobileLogIn', component: MobileLogIn},
    {path: '/passwordLogIn', name: 'PasswordLogIn', component: PasswordLogIn},
    {path: '/recentPlay', name: 'RecentPlay', component: RecentPlay},
    {path: '/songList', name: 'SongList', component: SongList},
    {path: '/testSide', name: 'TestSide', component: TestSide},
    {path: '/historyRecomend', name: 'HistoryRecomend', component: HistoryRecomend},
    {path: '/rankBoard', name: 'RankBoard', component: RankBoard},
    {path: '/searchResult', name: 'SearchResult', component: SearchResult},
    {path: '/boardDetail', name: 'BoardDetail', component: BoardDetail},
    {path: '/allNewSong', name: 'AllNewSong', component: AllNewSong},
    {path: '/playView', name: 'PlayView', component: PlayView},
    {path: '/singleList', name: 'SingleList', component: SingleList},
    {path: '/myLike', name: 'MyLike', component: MyLike}
  ]
})

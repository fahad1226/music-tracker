import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Songs from '@/components/Songs'
import CreateSong from '@/components/CreateSong'
import ViewSong from '@/components/ViewSong'
import EditSong from '@/components/EditSong'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
    	path: '/',
    	name: 'home',
    	component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs
    },
    {
      path: '/create',
      name: 'create',
      component: CreateSong
    },
    {
      path: '/songs/:songId',
      name: 'view',
      component: ViewSong
    },
    {
      path: '/songs/:songId/edit',
      name: 'edit',
      component: EditSong
    }
  ]
})

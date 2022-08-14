import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/login'
import Home from '@/view/home'
import Shopping from '@/view/shopping'
import Message from '@/view/message'
import Setting from '@/view/setting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      title: '登录'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      title: '首页'
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: Shopping,
      title: '购物'
    },    
    {
      path: '/message',
      name: 'message',
      component: Message,
      title: '消息'
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting,
      title: '设置'
    }

  ]
})

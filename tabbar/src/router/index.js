import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from '../views/home/Home'
import Category from '../views/category/Category'
import Profile from '../views/profile/Profile'
import Cart from '../views/cart/Cart'

let routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/profile',
        component: Profile
    },
]
// 安装插件
Vue.use(VueRouter)
// 创建路由
let router = new VueRouter({
    routes,
    mode:'history'
})
// 导出路由
export default router;
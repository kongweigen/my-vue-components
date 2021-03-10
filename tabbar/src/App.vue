<template>
    <div id="app">
        <!-- <tab-bar>
            <tab-bar-item path="/home">
                <img slot="item-icon" src="~assets/img/tabbar/home.png" alt="">
                <img slot="item-icon-active" src="~assets/img/tabbar/home-active.png" alt="">
                <div slot="item-text">首页</div>
            </tab-bar-item>
            <tab-bar-item path="/category">
                <img slot="item-icon" src="~assets/img/tabbar/category.png" alt="">
                <img slot="item-icon-active" src="~assets/img/tabbar/category-active.png" alt="">
                <div slot="item-text">分类</div>
            </tab-bar-item>
            <tab-bar-item path="/cart">
                <img slot="item-icon" src="~assets/img/tabbar/cart.png" alt="">
                <img slot="item-icon-active" src="~assets/img/tabbar/cart-active.png" alt="">
                <div slot="item-text">购物车</div>
            </tab-bar-item>
            <tab-bar-item path="/profile">
                <img slot="item-icon" src="~assets/img/tabbar/user.png" alt="">
                <img slot="item-icon-active" src="~assets/img/tabbar/user-active.png" alt="">
                <div slot="item-text">我的</div>
            </tab-bar-item>
        </tab-bar> -->
        
        <main-tab-bar></main-tab-bar>
        <router-view></router-view>

    </div>
</template>

<script>
    import MainTabBar from 'components/mainTabBar/MainTabBar'
    import NavBar from 'components/navbar/NavBar'
    // import TabBar from "components/tabbar/TabBar"
    // import TabBarItem from "components/tabbar/TabBarItem"
    export default {
        name: 'App',
        data() {
            return {


            }
        },
        components: {
            // TabBar,
            // TabBarItem,
            MainTabBar,
            NavBar
        }
    }
</script>

<style>
    @import "assets/css/base.css";
</style>
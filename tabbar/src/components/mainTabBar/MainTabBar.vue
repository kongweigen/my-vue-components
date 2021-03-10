<template>
    <!-- <tab-bar>
        <tab-bar-item v-for="item in tabBarDate" :path="item.path" :activeColor="item.textColor">
            <img slot="item-icon" :src="item.icon" alt="">
            <img slot="item-icon-active" :src="item.iconActive" alt="">
            <div slot="item-text">{{item.name}}</div>
        </tab-bar-item>
    </tab-bar> -->
    <tab-bar>
        <tab-bar-item path="/home">
            <img slot="item-icon" src="~assets/img/tabbar/home.png" alt="">
            <img slot="item-icon-active" src="~assets/img/tabbar/home-active.png" alt="">
            <div slot="item-text">首页</div>
        </tab-bar-item>
        <!-- <tab-bar-item path="/category">
            <img slot="item-icon" src="~assets/img/tabbar/category.png" alt="">
            <img slot="item-icon-active" src="~assets/img/tabbar/category-active.png" alt="">
            <div slot="item-text">分类</div>
        </tab-bar-item> -->
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
    </tab-bar>
</template>

<script>
    import TabBar from "components/tabbar/TabBar"
    import TabBarItem from "components/tabbar/TabBarItem"
    export default {
        name: 'MainTabBar',
        data() {
            return {


            }
        },
        components: {
            TabBar,
            TabBarItem
        }
    }
</script>

<style>

</style>
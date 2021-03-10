<template>
    <div>
        <nav-bar class="home-nav">
            <div slot="center">首页</div>
        </nav-bar>
    </div>
</template>
<script>
    import NavBar from 'components/navbar/NavBar'
    export default {
        name: 'Home',
        data() {
            return {

            }
        },
        components:{
            NavBar
        }

    }
</script>

<style>
    .home-nav{
        background-color: var(--color-tint);
    }
</style>
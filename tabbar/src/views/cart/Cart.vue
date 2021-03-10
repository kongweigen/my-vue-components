<template>

    <div>
        <nav-bar class="cart-nav">
            <div slot="center">购物车</div>
        </nav-bar>
    </div>
</template>
<script>
    import NavBar from 'components/navbar/NavBar'
    export default {
        name: 'Cart',
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
    .cart-nav{
        background-color: var(--color-tint);
    }
</style>
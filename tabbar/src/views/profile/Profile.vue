<template>

    <div>
        <nav-bar class="profile-nav">
            <div slot="center">我的</div>
        </nav-bar>
    </div>
</template>
<script>
    import NavBar from 'components/navbar/NavBar'
    export default {
        name: 'User',
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
    .profile-nav{
        background-color: var(--color-tint);
    }
</style>
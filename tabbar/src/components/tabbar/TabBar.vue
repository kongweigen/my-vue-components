<template>
    <div id="tab-bar">
        <slot>
            
        </slot>
    </div>
</template>
<script>
    export default {
        name: 'TabBar'
    }
</script>
<style>
    #tab-bar {
        display: flex;
        background-color: #f6f6f6;

        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;


    }

    .tab-bar-item {
        flex: 1;
        text-align: center;
        /* 基本都是49px */
        height: 49px;
    }
    .tab-bar-item img{
        height: 24px;
        width: 24px;
    }
</style>
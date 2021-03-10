<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive">
            <slot name="item-icon"></slot>
        </div>
        <div v-if="isActive">
            <slot name="item-icon-active"></slot>
        </div>
        <div :class="{active:isActive}" :style="activeStyle">
            <slot name="item-text"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'TabBarItem',
        props: {
            path: String,
            activeColor: {
                type: String,
                default: 'red'
            }
        },
        data() {
            return {
                // isActive: true
            }
        },
        computed: {
            isActive() {
                // 判断当前路由名称包含传入的路由
                return this.$route.path.indexOf(this.path) != -1;
            },
            activeStyle() {
                return this.isActive ? { color: this.activeColor } : {};
            }
        },
        methods: {
            itemClick() {
                this.$router.replace(this.path);
            }
        }
    }
</script>
<style>
    .tab-bar-item {
        flex: 1;
        text-align: center;
        /* 基本都是49px */
        height: 49px;
    }

    .tab-bar-item img {
        height: 24px;
        width: 24px;
        /* 去除图片下面的默认3像素 */
        vertical-align: middle;
        margin-top: 3px;
    }

    .active {
        color: red;
    }
</style>
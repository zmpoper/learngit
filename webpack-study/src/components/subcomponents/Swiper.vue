<template>
    <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.img">
        <img :src="item.img" alt ="" :class="{full:isfull}"/>
      </mt-swipe-item>
    </mt-swipe>
    </div>

    <!-- 两个轮播图的宽度有分歧，那么就定义一个属性，让轮播图的调用者，手动指定，是否为100%的宽度 -->
</template>

<script>
    export default {
        props:["lunbotuList","isfull"]
    }
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
      text-align:center
    // &:nth-child(1) {
    //   background-color: red;
    // }
    // &:nth-child(2) {
    //   background-color: blue;
    // }
    // &:nth-child(3) {
    //   background-color: yellow;
    // }
    img {
      height: 100%;
    //   width:100%; 默认宽度不是100% isfull为ture则把宽度100%加上
    }
  }
}
.full{
    width: 100%;
}
</style>
<template>
  <div>
    <!--轮播图-->
    <!-- <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.img">
        <img :src="item.img" alt =""/>
      </mt-swipe-item>
    </mt-swipe> -->
    <Swiper :lunbotuList="lunbotuList" :isfull="true"></Swiper>
    <!--九宫格-->
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/newslist">
          <img src="images/新闻.png" alt="" >
            <div class="mui-media-body">新闻咨询</div>
          </router-link>
            
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/photolist">
            <img src="images/1076685.gif" alt="">
            <div class="mui-media-body">图片分享</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/goodslist">
            <img src="images/商品指南.png" alt="">
            <div class="mui-media-body">商品购买</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/feedback">
            <img src="images/留言.png" alt="">
            <div class="mui-media-body">留言反馈</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="images/视频.png" alt="">
            <div class="mui-media-body">视频专区</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="images/联系我们.png" alt="">
            <div class="mui-media-body">联系我们</div>
          </a>
        </li>
      </ul>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
import Swiper from "../subcomponents/Swiper.vue"
export default {
  data() {
    return {
      lunbotuList: [] //保存轮播图的数组
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      this.$http.get("api/getlunbo").then(result => {
        // console.log(result);
        if (result.status === 200) {
          this.lunbotuList = result.body;
        } else {
          Toast("加载轮播图失败");
        }
      });
    }
  },
  components:{
    Swiper,
  }
};
</script>

<style lang="scss" scoped>
.mui-grid-view.mui-grid-9{
    background-color:  white;
    border: 0px;
    .mui-table-view-cell{
        border: 0px;
    }
    img{
        width: 60px;
        height: 60px;
    }
    .mui-media-body{
        font-size: 13px;
    }
}

</style>
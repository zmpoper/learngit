<template>
  <div>
    <!-- 顶部滑动条区域 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <!-- <a class="mui-control-item mui-active" v-for="item  in cates" :key="item.id">{{item.title}}</a> -->
          <a
            :class="['mui-control-item',item.id == 0 ? 'mui-active' :'']"
            v-for="item  in cates"
            :key="item.id"
            @click="getPhotoListByCateId(item.id)"
          >{{item.title}}</a>
        </div>
      </div>
    </div>
    <!-- 图片列表区域 -->
    <ul class="photo-list">
      <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+item.id" tag="li">
        <img v-lazy="item.img_url" />
        <div class="info">
        <h1 class="info-title">{{item.title}}</h1>
        <div class="info-body">{{item.zhaiyao}}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
//1，导入mui的js文件

export default {
  data() {
    return {
      cates: [],
      list: []
    };
  },
  created() {
    this.getAllCategory();
    this.getPhotoListByCateId();
  },
  //当组件中的DOM结构被渲染好并放到页面中后，会执行这个 钩子函数
  //如果要操作元素了，最好在mounted里面，因为，这时候的DOM元素是最新的
  //2. 初始化滑动控件
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getAllCategory() {
      this.$http.get("api/getimgcategory").then(result => {
        if (result.status === 200) {
          result.body.unshift({ title: "全部", id: 0 });
          this.cates = result.body;
        }
      });
    },
    getPhotoListByCateId(cateId) {
      //根据分类Id,获取图片列表
      this.$http.get("api/getimage/" + cateId).then(result => {
        if (result.status === 200) {
          this.list = result.body;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  touch-action: pan-y;
}
.photo-list {
    list-style: none;
    padding:10px;
    margin: 0px;
    padding-bottom: 0px;
  li {
      background-color: #ccc;
      text-align: center;
      margin-bottom:10px;
      box-shadow: 0 0 9px #999;
      position: relative;
      img{
          width: 100%;
          vertical-align: middle;
      }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
      
    }
    .info{
        color: white;
        text-align: left;
        position: absolute;
        bottom: 0;
        background-color: rgba(0,0,0,0.4);
        max-height: 84px;
        .info-title{
            font-size: 14px;

        }
        .info-body{
            font-size:13px;
        }
    }
  }
}
</style>
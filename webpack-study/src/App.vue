<template>
  <div class="app-container">
    <!-- 顶部Header 区域-->
    <mt-header fixed title="Vue项目">
      <span  slot="left" @click="goBack" v-show="flag">
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>
    <!-- 中间的路由router-view区域-->
    <transition>
    <router-view></router-view>
    
    </transition>

    <!-- 底部Tabbar区域-->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-zm " to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-zm" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item-zm" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="badge">{{$store.getters.getAllCount}}</span>
        </span>
        <span class="mui-tab-label" >购物车</span>
      </router-link>
      <router-link class="mui-tab-item-zm" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default{
  data(){
    return {
      flag: false
    };
  },
  created () {
    this.flag = this.$route.path === "/home" ? false : true
  },
  methods: {
    goBack(){
      //点击后退
      this.$router.go(-1)
    },
  },
  watch: {
    '$route.path' :function (newVal) {

      if(newVal === '/home'){
        this.flag= false
      }else{
        this.flag=true
      }
      
    }
  }

}
</script>

<style lang="scss" scoped>
.mint-header{
  z-index: 99;
}
.app-container {
  padding-top: 40px;
  overflow-x: hidden;
  padding-bottom: 50px;
}

.v-enter{

    opacity: 0;
    transform: translateX(100%);
}
.v-leave-to{
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
}
.v-enter-active,
.v-leave-active{

    transition: all 0.5s ease;

}
//修改类名解决tabbar点击无法切换问题
.mui-bar-tab .mui-tab-item-zm.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-zm {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-zm .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-zm .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
@media(min-device-width:375px)and(max-device-width:667px){
    .app-container {
      padding-bottom:500px;
    }
/*iphone6适配底部tabbar*/
 
}

</style>
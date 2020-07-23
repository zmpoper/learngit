<template>
  <div class="goodsinfo-container">
      <transition @before-enter="beforeEnter"
      @enter="enter" @after-enter="afterEnter">
          <div class="ball" v-show="ballFlag" ref="ball"></div>
      </transition>
      
    <!-- 商品轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <Swiper :lunbotuList="lunbotu" :isfull="false"></Swiper>
        </div>
      </div>
    </div>

    <!-- 商品购买区域 -->

    <div class="mui-card">
      <div class="mui-card-header">{{goodsinfo.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：
            <del>¥{{goodsinfo.market_price}}</del>&nbsp;&nbsp;销售价：
            <span class="now_price">¥{{goodsinfo.sell_price}}</span>
          </p>
          <p>
            购买数量：
            <numbox @getcount="getSelectedCount" :max="goodsinfo.stock_quantity"></numbox>
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToShopCar()">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>
    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{goodsinfo.goods_no}}</p>
          <p>库存数量：{{goodsinfo.stock_quantity}}</p>
          <p>上架时间：{{goodsinfo.add_time}}</p>
        </div>
        <div class="mui-card-footer">
          <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
          <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "../subcomponents/Swiper.vue";
import numbox from "../subcomponents/GoodsNumber.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      lunbotu: [],
      goodsinfo: {},
      ballFlag: false, //控制小球隐藏和显示
      selectedCount:1
    };
  },
  created() {
    this.getLunbotu();
    this.getInfo();
  },
  methods: {
    getLunbotu() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.status === 200) {
          //先循环轮播图数组的每一项，为item添加image属性
          //因为轮播图组件只认识item.img,不认识item.src
          result.body.forEach(item => {
            item.img = item.src;
          });
          this.lunbotu = result.body;
        }
      });
    },
    getInfo(){
        this.$http.get("api/goods/getinfo/"+this.id).then(result=>{
            if(result.status ===200){
                this.goodsinfo = result.body[0]
            }
        })
    },
    goDesc(){
        //使用编程式导航跳转
        this.$router.push({name: "goodsdesc",params:{id:this.id}});
    },
    goComment(){

        this.$router.push({name: "goodscomment",params:{id:this.id}});
    },
    addToShopCar(){
        //添加到购物车
        //设计成这个样子{id:商品的ID，count：要够买的数量，price:商品单价，selected:true}
        //拼接出一个，要保存到store中的对象
        this.ballFlag=!this.ballFlag;
        var goodsinfo = {id:this.id,count:this.selectedCount,price:this.goodsinfo.sell_price,
        selected:true}
        //调用store中的mutations 来将商品加入购物车
        this.$store.commit('addToCar', goodsinfo)
        

    },
    beforeEnter(el){
        el.style.transform="translate(0,0)";
    },
    enter(el,done){
        el.offsetWidth;

        //获取小球在页面中的位置
        const ballPosition = this.$refs.ball.getBoundingClientRect();
        //获取徽标的位置
        const badgePosition = document.getElementById('badge').getBoundingClientRect();
        const xDist = badgePosition.left - ballPosition.left
        const yDist = badgePosition.top - ballPosition.top
        el.style.transform=`translate(${xDist}px,${yDist}px)`;//628px 228px
        el.style.transition = 'all 0.5s cubic-bezier(.4,-0.3,1,.68)';
        done()

    },
   afterEnter(el){
       this.ballFlag=!this.ballFlag;
   },
   getSelectedCount(count){
       this.selectedCount = count;
       console.log('父组件拿到的数量值为'+this.selectedCount );
   }
  },
  components: {
    Swiper,
    numbox
  }
};
</script>

<style lang="scss" scoped>
.goodsinfo-container {
  background-color: #eee;
  overflow: hidden;
  .now_price {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }
  .mui-card-footer{
      display: block;
  }
  button{
      margin: 16px 0;
  }
  .ball{
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color:red;
      position: absolute;
      z-index: 99;
      top:391px;
      left:150px;
  }
}
</style>
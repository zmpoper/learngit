<template>
  <div class="goods-list">
    <!-- 原来的方法<router-link class="goods-item" v-for="item in goodslist" :key="item.id" :to="'/home/goodsinfo/'+item.id">
      <img :src="item.img_url" alt />
      <h1 class="title">{{item.title}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">¥{{item.sell_price}}</span>
          <span class="old">¥{{item.market_price}}</span>
        </p>
        <p class="sell">
          <span>不卖中</span>
          <span>剩0只</span>
        </p>
      </div>
    </router-link> -->
    <!-- 另外一种方法 网页中有两种跳转方式-->
    <!-- 方式1: 使用a标签的形式叫做 标签跳转 -->
    <!-- 方式2: 使用window.location.href的形式，叫做编程式导航 -->
    <div class="goods-item" v-for="item in goodslist" :key="item.id" @click="goDetail(item.id)">
      <img :src="item.img_url" alt />
      <h1 class="title">{{item.title}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">¥{{item.sell_price}}</span>
          <span class="old">¥{{item.market_price}}</span>
        </p>
        <p class="sell">
          <span>不卖中</span>
          <span>剩0只</span>
        </p>
      </div>
    </div>
    <mt-button type="danger" size="large" @click="getMore()">加载更多</mt-button>
   
  </div>
</template>

<script>
export default {
    data () {
        return {
            pageindex:1,
            goodslist: []
        }
    },
    created () {
      this.getGoodsList()  
    },
    methods: {
        getGoodsList(){
            this.$http.get("api/getgoodslist").then(result=>{
                if (result.status===200){
                    // this.goodslist = result.body;
                    this.goodslist = this.goodslist.concat(result.body);
                }
            })
        },
        getMore(){
            this.getGoodsList();
        },
        goDetail(id){
            //使用js的形式进行路由导航
            // this.$router.push('/home/goodsinfo/'+id)
            this.$router.push({name:"goodsinfo",params:{id}})
        }
    },
};
</script>

<style lang="scss" scoped>
.goods-list{
    display:flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;
    .goods-item{
        width: 48%;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        margin:3px 0;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 174px;
        img{
            width: 100%
        }
        .title{
            font-size: 14px;
        }
        .info{
            background-color: #eee;
            p{
                margin:0;
                padding: 5px;
            }
            .price{
                .now{
                    color: red;
                    font-weight: bold;
                    font-size: 16px;
                }
                .old{
                    text-decoration: line-through;
                    font-size: 12px;
                    margin-left: 10px;
                }
            }
            .sell{
                display:flex;
                justify-content: space-between;
                font-size: 13px;
            }
        }
    }

}
</style>
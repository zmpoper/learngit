<template>
  <div>
    <div class="shopcar">
      <div class="goods-list">
        <!-- 商品列表区域 -->
        <div class="mui-card" v-for="(item,i) in goodslist" :key="item.id">
          <div class="mui-card-content">
            <div class="mui-card-content-inner">
              <mt-switch v-model="$store.getters.getGoodsSelected[item.id]" @change="selectedChanged({id:item.id,selected:$store.getters.getGoodsSelected[item.id]})"></mt-switch>
              <img :src="item.thum_path" alt="">
              <div class="info">
                  <h1>{{item.title}}</h1>
                  <p>
                      <span class="price">¥{{item.sell_price}}</span>
                      <numbox :value="$store.getters.getGoodsCount[item.id]" :id="item.id" ></numbox>
                      <!-- 问题：如何从购物车中获取商品的数量呢 -->
                      <!-- 1,我们可以先创建一个空对象，然后循环购物车中所有商品的数据，把当前循环这条商品的id，作为对象的属性名
                      count值作为对象的属性值，这样，当把所有的商品循环一遍，就会得到一个对象{88:2,89:1,90:4} -->
                      <a href="" @click.prevent="remove(item.id,i)">删除</a>
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 结算区域 -->
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner jiesuan" >
             <div class="left">
              <p>总计（不计运费）</p>
              <p>已勾选商品<span class="red">{{$store.getters.getGoodsSummary.count}}</span>件，总价<span class="red">¥{{$store.getters.getGoodsSummary.summary}}</span></p>
              </div> 
              <mt-button type="danger">去结算</mt-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import numbox from '../subcomponents/ShopCarNumber.vue'
export default {
    data () {
        return {
            goodslist:[]
        }
    },
    components: {
        numbox
    },
    created () {
        this.getShopCarList()
    },
    methods: {
        getShopCarList(){
            //1,获取到store中所有商品的id，拼接成一个字符串
            var idArr = []
            this.$store.state.car.forEach(item => {
                idArr.push(item.id)
            });
            //2,如果购物车中没有商品，则直接返回，不需要请求数据接口，否则会报错
            if(idArr.length<=0){
                return;
            }
            this.$http.get('api/goods/getshopcarlist/'+idArr).then(result=>{
                if(result.status===200){
                    this.goodslist = result.body
                }
            })
        },
        remove(id,index){
            //点击删除，把商品从store中根据传递的Id的删除，同时，把当前组件中的goodslist中，对应要删除的那个商品，使用
            //index删除
            this.$store.commit('deleteGoodsInfo',id);
            this.goodslist.splice(index,1)
        },
        selectedChanged(goodsinfo){
            this.$store.commit('updateSelected',goodsinfo);
        }
    },
};
</script>

<style lang="scss" scoped>
.goods-list{
    .mui-card-content-inner{
        display: flex;
        align-items: center;
        padding-right: 0px;
    }
    img{
        width:60px;
        height: 60px;
        margin-left: 8px;
    }
    h1{
        font-size: 13px;
        margin-left: 10px;
    }
    .info{
        display:flex;
        flex-direction: column;
        p{
            margin-top: 8px;
            margin-left: 10px;
        }
        .price{
        color: red;
        font-weight: bold;
        }
    }
    
    
}
.jiesuan{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .red{
            color: red;
            font-size: 16px;
            font-weight: bold;
        }
        

    }

</style>
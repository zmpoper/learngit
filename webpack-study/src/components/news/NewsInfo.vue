<template>
  <div class="newsinfo-container">
    <h3 class="title">{{newslist.title}}</h3>
    <p class="subtitle">
        <span>发表时间：{{newslist.add_time|dateFormat}}</span>
        <span>点击：{{newslist.click}}次</span>
    </p>
    <hr>
    <div v-html="newslist.content" class="content"></div>
    <comment :id="this.id"></comment>
  </div>

</template>

<script>
import {Toast} from 'mint-ui'
import comment from '../subcomponents/comment.vue'
export default {
  data() {
    return {
        newslist: {},
        id:this.$route.params.id 
    };
  },
  created () {
      this.getNewsList()
  },
  methods: {
    getNewsList() {
      this.$http.get("api/getnewsinfo/" + this.id).then(dataStr=> {
          if(dataStr.status===200){
              console.log(dataStr.body);
              this.newslist=dataStr.body;
          }else{
              Toast('获取新闻信息失败！');
          }
      }).catch((err) => {
                console.log(err);
            });
    }
  },
  components:{
      comment,
  }
};
</script>

<style lang="scss" scoped>
 .newsinfo-container{
     padding: 0 4px;
     .title{
         font-size: 14px;
         color: red;
         text-align: center;
         margin: 15px 0;
     }
     .subtitle{
         font-size: 13px;
         color:blue;
         display:flex;
         justify-content: space-between;
         
     }
     .content{
         img{
             width:100%;
         }
     }
 }
</style>
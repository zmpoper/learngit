<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
        <router-link :to="'/home/newsinfo/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url" />
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
              <span>发表时间：{{item.add_time|dateFormat}}</span>
              <span>点击：{{item.click}} 次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      newslist: []
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      this.$http.get("api/getnewslist").then(result => {
        if (result.status === 200) {
          console.log(result.body);
          this.newslist = result.body;
        } else {
          Toast("获取新闻列表失败！");
        }
      });
    }
  },
//   filters: {
//     dateFormat(data ) {
//         //"2015-04-16T03:50:28.000Z"
//         var date= new Date(data);
//         var year = date.getFullYear(); 
//         var month =("0" + (date.getMonth() + 1)).slice(-2);//将月份转成2位数,永远从倒数第二位开始截取
//         var day = date.getDate();
//         var hh = date.getHours();
//         var mm = date.getMinutes();
//         var ss = date.getSeconds()
//         return `${year}-${month}-${day} ${hh}:${mm}:${ss}`
//     }
//   }
};
</script>

<style lang="scss" scoped>
.mui-table-view {
  li {
    h1 {
      font-size: 14px;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: blue;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
<template>
  <div class="photoinfo-container">
    <h3>{{photoinfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{photoinfo.add_time|dateFormat}}</span>
      <span>点击次数：{{photoinfo.click}}次</span>
    </p>
    <hr />
    <!-- 缩略图 -->
    <vue-preview :slides="slide1" @close="handleClose()"></vue-preview>
    <!-- 图片内容区域 -->
    <div class="content" v-html="photoinfo.content"></div>
    <!-- 放置一个现成的 评论子组件 -->
    <cmt-box :id="id"></cmt-box>
  </div>
</template>

<script>
//1.导入评论子组件
import comment from '../subcomponents/Comment.vue'
export default {
  data() {
    return {
      id: this.$route.params.id,
      photoinfo: {},
      slide1: [
          {
            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
            alt: 'picture1',
            title: 'Image Caption 1',
            w: 400,
            h: 400
          },
          {
            src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
            msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
            alt: 'picture2',
            title: 'Image Caption 2',
            w: 400,
            h: 300
          }
        ],
    };
  },
  created() {
    this.getPhotoInfo();
  },
  methods: {
    getPhotoInfo() {
      this.$http.get("api/getimageInfo/" + this.id).then(result => {
        console.log(result);
        if (result.status === 200) {
          this.photoinfo = result.body;
        }
      });
    }
  },
  components:{
      'cmt-box': comment
  },
  handleClose () {
        console.log('close event')
      }
};
</script>

<style lang="scss" scoped>
.photoinfo-container {
  padding: 10px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
  .content{
      font-size: 13px;
      line-height: 30px;
  }
}
</style>
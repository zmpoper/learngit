<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr />
    <textarea placeholder="请输入要BB的内容（最多吐槽120字）" maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click.native="postComment">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,i) in comments" :key="i">
        <div
          class="cmt-title"
        >第{{i+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time|dateFormat}}</div>
        <div class="cmt-body">{{item.content==='undefined' ? '此用户很懒，嘛都没说':item.content}}</div>
      </div>
    </div>
    <mt-button type="danger" size="large" icon="more" plain @click.native="moreComment()">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      comments: [],
      msg: ""
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      this.$http.get("api/getcomments/" + this.id).then(result => {
        if (result.status === 200) {
          this.comments = this.comments.concat(result.body);
          console.log(result.body);
        } else {
          Toast("获取评论失败");
        }
      });
    },
    postComment() {
      if (this.msg === "") {
        Toast("评论内容不能为空");
      } else {
        this.$http
          .post("api/postcomment/" + this.$route.params.id, {
            content: this.msg.trim()
          })
          .then(result => {
            if (result.status === 200) {
              //1. 凭借出一个评论对象
              var cmt = {
                user_name: "匿名用户",
                add_time: Date.now(),
                content: this.msg.trim()
              };
              this.comments.unshift(cmt);
              this.msg = "";
            }
          });
      }
    },
    moreComment() {
      this.getComments();
    }
  },
  props: ["id"]
};
</script>

<style lang="scss" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin-bottom: 0;
  }
  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>
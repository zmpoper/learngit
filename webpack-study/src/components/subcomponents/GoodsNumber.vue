<template>
<!-- 问题：我们不知道什么时候能够拿到max值，但是，总归有一刻，会得到一个真正的max值 -->
<!-- 我们可以使用watch属性监听，来监听父组件传递过来的max值，不管watch会被触发几次，但是最后一次肯定是一个合法的值 -->
  <div class="mui-numbox" data-numbox-min="1" :data-numbox-max="max" data-numbox-step="1">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numbox"/>
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
  <!-- 子组件什么时候把数据传递给父组件 -->
</template>

<script>
export default {
  mounted() {
    mui(".mui-numbox").numbox();
  },
  props:["max"],
  watch: {
    'max' : function(newVal,oldVal) {
        mui(".mui-numbox").numbox().setOption('max',newVal)
    }
  },
  methods: {
      countChanged(){
          //每当文本框的数据被修改，就触发父组件的事件
        //   console.log(this.$refs.numbox.value);
          this.$emit('getcount',parseInt(this.$refs.numbox.value) );
      }
  },
};
</script>

<style lang="scss" scoped>
</style>
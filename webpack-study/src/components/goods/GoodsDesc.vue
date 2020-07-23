<template>
    <div class="goodsdesc-container">
       <h3>{{info.title}}</h3> 
       <hr>
       <div class="content" v-html="info.content"></div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                info:{}//图文数据
            }
        },
        created () {
          this.getGoodsDesc()  
        },
        methods: {
            getGoodsDesc(){
                this.$http.get('api/goods/getdesc/'+this.$route.params.id).then(result=>{
                    if (result.status===200){

                    this.info = result.body
                    }
                })
            }
        },
        
    }
</script>

<style lang="scss" scoped>
.goodsdesc-container{
    padding: 0 15px;
    h3 {
        color: blue;
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
    }
}
</style>
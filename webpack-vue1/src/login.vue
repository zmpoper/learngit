
<template>
    <div>
        <h1>.vue文件定义的组件----{{msg}}</h1>
    </div>
</template>
<script>
export default {
    data () {//注意组件中的data必须是function
        return {
            msg: '123'
        }
    },
    methods: {
        show(){
            console.log('调用了login.vue中的show方法');
        }
    }
}
</script>
<style>

</style>
<template>
    <div>
        <h1>Account组件</h1>
         <router-link to="/account/login">登录</router-link>
        <router-link to="/account/register">注册</router-link>
        <router-view ></router-view>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
/* 普通的style标签 只支持普通的样式，如果想要启用scss或less，需要设置lang属性 */
body{
    div{
        font-style: italic;
    }
}
</style>
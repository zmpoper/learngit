<template>
  <div>
    <h1>app组件</h1>
    <mt-button type="default" size="small"  icon="back" disabled>default</mt-button>
    <mt-button type="primary" size="large" plain>primary</mt-button>
    <mt-button type="danger" size="normal" @click="show">danger</mt-button>
    <button type="button" class="mui-btn mui-btn-royal">
					紫色
				</button>
    <router-link to="/account">Account</router-link>
    <router-link to="/goodslist">GoodsList</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
//按需导入Toast组件
import { Toast } from 'mint-ui';
export default {
    data () {
        return {
           toastInstance: null, 
        }
    },
    created () {
        this.getlist();
    },
    methods: {
        show(){
           this.toastInstance = Toast({
                
                message:'提示信息',
                durduration:-1,
                position: 'bottom',
                iconClass: 'oi oi-battery-empty',
                className: 'mytoast'//自定义Toast的样式，需要自己提供一个类名
                });
        },
        getlist(){
            this.show();
            setTimeout(()=>{
                this.toastInstance.close();
            },3000);
        }
    }
    
}
</script>
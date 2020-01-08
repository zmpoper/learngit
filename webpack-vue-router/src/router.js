import VueRouter from 'vue-router'
import account from './main/account.vue'
import goodslist from './main/GoodsList.vue'
import login from './main/Login.vue'
import register from './main/Register.vue'
//3,创建路由对象
var router = new VueRouter({
    routes:[
        { path: '/account', component: account,
            children:[
                { path: 'login', component: login },
                { path: 'register', component: register }
            ] 
        },
        { path: '/goodslist', component: goodslist }
    ]
})


//把路由对象暴露出去
export default router;
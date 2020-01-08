import Vue from 'vue';
//1,导入路由包
import VueRouter from 'vue-router'
//2，手动安装VueRouter
Vue.use(VueRouter)


import app from './app.vue'
//由于将路由分离成router.js，所以要引入这个模块
import router from './router.js'


// import account from './main/account.vue'
// import goodslist from './main/GoodsList.vue'
// import login from './main/Login.vue'
// import register from './main/Register.vue'

//3,创建路由对象
// var router = new VueRouter({
//     routes:[
//         { path: '/account', component: account,
//             children:[
//                 { path: 'login', component: login },
//                 { path: 'register', component: register }
//             ] 
//         },
//         { path: '/goodslist', component: goodslist }
//     ]
// })

var vm =  new Vue({
   el: '#app' ,
   render: c=>c(app),//render 会把el指定的容器中，所有内容清空覆盖
   //所以不要把路由的router-view 和 router-link 直接写到el所控制的元素中
   router,//4,挂载
       
})

//注意：app这个组件，是通过VM实例的render 函数，渲染出来的，render函数如果要渲染组件
//只能放到el:'#app' 所指定的元素中；
//Account 和 GoodsList 组件， 是通过 路由匹配监听到的，所以，这两个组件，只能展示到属于
//路由的<router-view></router-view>中去；
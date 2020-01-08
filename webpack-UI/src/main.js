import Vue from 'vue';
//1,导入路由包
import VueRouter from 'vue-router'
//2，手动安装VueRouter
Vue.use(VueRouter)

//导入所有的MintUI组件
//导入Mint-UIs
// import MintUI from 'mint-ui'
// //这里可以省略node_modules这一层目录
// import 'mint-ui/lib/style.css'
// //将MintUI 安装到 Vue中
// Vue.use(MintUI)//把所有组件注册为全局了

//按需导入MintUI
import {Button} from 'mint-ui'
//使用Vue.component注册 按钮组件
Vue.component(Button.name,Button)

//导入bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'open-iconic/font/css/open-iconic-bootstrap.css'
import './css/app.css'

//导入mui
import './lib/mui/css/mui.css'

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
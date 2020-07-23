//入口文件
console.log('ok');

import Vue from 'vue'
//配置vuex的步骤
//1,运行 npm i vuex -S
//2,导入包
import Vuex from 'vuex'
//3,注册vuex到vue中
Vue.use(Vuex)

//每次刚进入网站，肯定会调用main.js，刚调用的时候，先从本地存储中，把购物车的数据读出来，放到
var car = JSON.parse(localStorage.getItem('car') || '[]')
//4,new Vuex.Store() 实例，得到一个数据仓储对象
var store = new Vuex.Store({
    state: {
        //state相当于组件中的data
        //this.$store.state.***
        car: car//将购物车中的商品的数据，用一个数组存储起来，在car数组中，存储一些商品的对象，咱们可以暂时将这个商品对象
        //设计成这个样子{id:商品的ID，count：要够买的数量，price:商品单价，selected:true}
    },
    mutations: {
        //this.$store.commit('方法的名称', '按需传递唯一的参数')
        //mutations相当于组件中的methods 
        addToCar(state, goodsinfo) {
            //1,如果购物车中，之前就有这个产品，就只需要更新数量
            //2，如果没有，则直接把商品数据，push到car中即可

            var flag = false
            state.car.some(item => {
                if (item.id == goodsinfo.id) {
                    item.id = parseInt(item.id)
                    item.count += parseInt(goodsinfo.count)
                    flag = true
                    return true
                }
            })
            if (!flag) {
                state.car.push(goodsinfo)
            }

            //当更新car之后，把car存储到本地
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        updateGoodsInfo(state, goodsinfo) {
            console.log(goodsinfo);
            state.car.some(item => {
                if (item.id == goodsinfo.id) {
                    item.count = parseInt(goodsinfo.count)
                    return true
                }
            })
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        deleteGoodsInfo(state, id) {
            state.car.some((item, i) => {
                if (item.id == id) {
                    state.car.splice(i, 1)
                    return true
                }

            })
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        updateSelected(state, goodsinfo) {
            console.log(goodsinfo);
            state.car.some(item => {
                if (item.id == goodsinfo.id) {
                    item.selected = goodsinfo.selected
                    return true
                }
            })
            localStorage.setItem('car', JSON.stringify(state.car))
        },
    },
    getters: {
        //this.$store.getters.****
        getAllCount(state) {
            var c = 0;
            state.car.forEach(item => {
                c += item.count
            })
            return c
        },
        getGoodsCount(state) {
            var o = {}
            state.car.forEach(item => {
                o[item.id] = item.count
            })
            return o
        },
        getGoodsSelected(state) {
            var o = {}
            state.car.forEach(item => {
                o[item.id] = item.selected
            })
            return o
        },
        getGoodsSummary(state){
           
           var o ={count:0,summary:0} 
            state.car.forEach(item=>{
                if (item.selected){
                   o.count+=item.count 
                   o.summary+=(item.count * item.price)
                }
            })
            return o
        }
    }
})
//导入路由的包
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)
//导入vue-resource
import VueResource from 'vue-resource'
//安装vue-resource
Vue.use(VueResource)
Vue.http.options.root = 'http://127.0.0.1:1337'
// Vue.http.options.root = 'http://192.168.1.2:1337'
Vue.http.options.emulateJSON = true;
//全局时间过滤器
import moment from 'moment'

Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)

});
//导入MUI
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/css/feedback.css'

import mui from './lib/mui/js/mui.min.js'

//导入自己的router.js路由模块
import router from './router.js'
//导入app根组件

import app from './App.vue'
import { Header, Swipe, SwipeItem, Button, Switch,Field } from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.component(Switch.name, Switch);
Vue.component(Field.name, Field);

import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);

import VuePreview from 'vue-preview'

// defalut install
Vue.use(VuePreview)

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router,
    store
})
console.log('ok');
//如何在webpack构建的项目中，使用vue进行开发

//复习 在普通网页中如何使用vue
//1.使用script 标签，引入vue的包
//2.在index页面中，创建一个id为app div容器
//3.通过new Vue得到一个vm的实例

//注意，在webpack中，使用import Vue from 'vue' 构造函数，只提供了 runtime-only的方式
//并没有提供像网页中那样的使用方式
import Vue from 'vue';
// import Vue from '../node_modules/vue/dist/vue.js'; 第一种修改包的导入方式
//回顾包的查找规则
//1，找项目根目录中有没有node_modules的文件夹
//2，在node_modules中 根据包名，找对应的 vue 文件夹
//3，在vue文件夹中，找一个叫做package.json的包配置文件
//4，在package.json文件总，查找一个main属性【mian属性指定了这个包在被加载的时候，的入口文件】
// var login = {
//     template: '<h1>这是网页中形式创建出来的模版</h1>'
// }
import login from './login.vue';
//默认，webpack无法打包.vue文件 需要安装相关的loader
//sudo cnpm i vue-loader vue-template-compiler -D
//cnpm i vue-loader-plugin -S
var vm = new Vue({
    el: '#app',
    data:{
        msg: '123'
    },
    // components:{
    //     login
    // }
    // render: function (createElement) {//在webpack中，如果想要通过vue,把一个组件
    //     //放到页面中去展示，vm实例中的render函数可以实现
    //     return createElement(login)
        
    // }
    render: c => c(login)
})

import m1, { title as t} from './test.js'


console.log(m1);
console.log(t);
//这个main.js是我们项目的js入口文件

//1，导入jquery
//import这是ES6中的导入模块的方式
//由于ES6的代码，太高级，浏览器识别不了
//webpack ./src/main.js -o ./dist/bundle.js --mode development
import $ from 'jquery'

// import './css/index.css'
//注意：webpack 默认只能打包处理js 类型的文件，无法处理其它非js类型的文件
//如果要处理非js类型的文件，我们需要手动安装一些合适第三方loader加载器
//1,cnpm i style-loader css-loader -D
//2,打开webpack.config.js 这个配置文件，在里面，新增一个配置节点，叫做module,是一个对象
//在这个module对象上，有个rules属性，这个rules属性是个数组，这个数组中，存放第三方文件的匹配和处理规则
//webpack处理第三方文件类型的过程：
//1.发现这个要处理的文件不是js文件，然后就去配置文件，查找有没有对应的第三方的loader
//2.如果能找到对应的规则，就会调用对应的loader处理这种文件类型
//3.在调用loader的时候，是从后往前调用的


// import './css/index.less'


// import './css/index.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
//node中的导入包的用法，浏览器也识别不了
// const $ = require('jquery')

// $(function () {
//    $('li:odd').css('backgroundColor','green') 
//    $('li:even').css('backgroundColor',function () {
//        return '#' + 'D97634'
       
//    }) 
// }) 

class Person{
    static info = {name:'zs',age:20}
    //webpack中默认只能处理一部分ES6语法，这时候就需要借助第三方的loader转为低级的语法
    //通过babel两套安装命令都要安装
    //1，cnpm i babel-core babel-loader babel-plugin-transform-runtime -D
    //2，cnpm i babel-preset-env babel-preset-stage-0 -D


    //在项目的根目录下，新建一个 .babelrc的配置文件 JSON格式
    //在 .babelrc写如下的配置
    //{
    //     "presets":["env","stage-0"],  对应安装的语法插件： env   stage-0
    //     "plugins":["transform-runtime"]   对应安装的插件  transform-runtime
    // }
}
// var p1 = new Person()
console.log(Person.info);

function Animal(name){
    this.name = name
}
Animal.info = 123

var a1 = new Animal('dddd')
//js打包入口文件

import React from "react"
import ReactDom from "react-dom"

//创建虚拟DOM对象，接收三个及以上的参数
//参数1:是个字符串类型的参数
//参数2:是个属性对象,表示创建的这个元素上，有哪些属性
//参数3:从第三个参数开始，后面可以放好多的虚拟DOM对象，这些参数表示当前元素的子节点
/* <div title ="this is a div" id="mydiv">这是一个div</div> */
// var myH1 = React.createElement('h1',null,'这是一个H1')
// var myDiv = React.createElement('div',{title:'this is a div',id: 'mydiv'},'这是一个div',myH1)
//由于，React官方，发现，如果直接让用户手写JS代码的创建元素，太麻烦，于是有了jsx语法
//如果要使用jsx语法，需要先安装相关的语法转换工具 cnpm i babel-preset-react -D
//如果在jsx内容内部写js，必须写到{} 内部
//jsx中遇到<>就把内部内容当成html编译，遇到{}就当作js编译
//jsx中如果要为元素添加class属性，那么必须写成classname，因为class在es6中是一个关键字
//和class类似，label标签的for属性，需要替换为htmlFor
var arr=[]
for(var i=0;i<10;i++){
    var p =<p className="myp" key={i}>2222222222</p> 
    arr.push(p)
}
var mytitle = '这是使用变量定义的title值'
var mydiv=<div> 这是使用jsx创建的div 
<h1 title={mytitle}>哈哈哈</h1>
<p></p>
{arr}
{/* 这是注释*/}
<label htmlFor=""></label>
</div>

// ReactDom.render('要渲染的虚拟DOM元素','要渲染到页面哪个位置上')
ReactDom.render(mydiv,document.getElementById('app'))


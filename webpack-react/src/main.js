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
// for(var i=0;i<10;i++){
//     var p =<p className="myp" key={i}>2222222222</p> 
//     arr.push(p)
// }
var mytitle = '这是使用变量定义的title值'
/*
var mydiv=<div> 这是使用jsx创建的div 
<h1 title={mytitle}>哈哈哈</h1>
<p></p>
{arr}
<label htmlFor=""></label>
</div>
*/
//在react中，构造函数，就是一个最基本的组件
//如果想把组件放到页面中，可以把构造函数的名称，当作 组件的名称，以html标签形式引入页面中即可
//组件首字母必须大写
// function Hello(params) {
//     console.log(params)
//     return <div>
//         <h1>这是在Hello组件中定义的元素---{params.name}</h1>
       
//     </div>
// }
// var name = 'zs'
// var age = 20
var person = {
    name:'ls',
    age:22,
    gender:'男'
}

import Hello from './components/Hello.js'   //function创建的组件
import Hello2 from './components/Hello2.js' //class创建的组件
//注意：以上两种创建组件的方式，有着本质上的区别，其中，
//使用function 构造函数创建的组件，内部没有state私有数据，只有props
//class创建的组件中，除了有this.props这个属性，还有一个专门用于存放自己私有
//数据的this.state属性，这个state是可读可写的

//基于上面的区别：我们可以为这两种创建组件的方式，下定义了：使用function创建的组件
//叫做【无状态组件】；使用class创建的组件，叫做【有状态组件】
//区别就是有无state属性；同时，class创建的组件，有自己的完整的生命周期函数，
//但是function创建的组件，没有自己的生命周期函数

//问题：什么时候使用有状态组件，什么时候使用无状态组件？？？
//1，如果一个组件需要存放自己的私有数据，或者需要在组件的不同阶段执行不同的业务逻辑
//此时非常适合用有状态组件class
//2，如果一个组件只需要外界传来的props，渲染固定的 页面结构就完事了，此时，非常适合用
//function创建出来的无状态组件：（使用无状态组件的小小好处：由于剔除了组件的生命周期
//所以，运行速度会快一丢丢

// import myclass from './class_study2.js'
// ReactDom.render('要渲染的虚拟DOM元素','要渲染到页面哪个位置上')
ReactDom.render(<div><Hello {...person}></Hello>
                    <Hello2 address="北京" info="123"></Hello2>
                </div>
    ,document.getElementById('app'))


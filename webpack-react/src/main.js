//js打包入口文件
import React from "react"
import ReactDom from 'react-dom'
import CmtList from './components/CmtList.js'

//这种导入样式的方式并不是模块化的导入方式
//默认情况下，没有为css启用模块化，则接收到的cmtListTitle是个空对象
//如何添加css模块化，在webpack.config.js 中配置xs

//封装评论项
// function CommentItem(props){
//     return<div >
//     <h1 >评论人:{props.user}</h1>
//     <h3 >评论内容:{props.content}</h3>
//     </div>
// }

// class  CommentList extends React.Component{
//     constructor(props){
//         super(props)

//         //定义当前评论列表组件的私有数据
//         this.state ={
//             cmts:[
//                 {user:'张三',content:'哈哈哈,沙发'},
//                 {user:'张三',content:'哈哈哈,龙椅'},
//                 {user:'张三',content:'哈哈哈,山炮'},
//             ]
//         }
//     }

//     render() {
//         //这是循环评论列表的方式1，比较low，要使用jsx方式才高端
//         // var arr = []
//         // this.state.cmts.forEach((item,index)=>{
//         //     arr.push(<h1 >{item.user}</h1>)
//         // })
//         return (
//             <div>
//             {this.state.cmts.map((item,index)=>{
//                 return <CommentItem {...item} key={index}></CommentItem>
//             })}
//          </div> 
//         )
//     }
// }

ReactDom.render(<div>
    <CmtList></CmtList>
    </div>,document.getElementById('app'))


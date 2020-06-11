import React from 'react'
import CmtItem from './CmtItem.js'
//css文件不能export default 所以得设置css模块化，才可以将css当作模块导入
import cmtListTit from './../css/cmtList.css'
console.log(cmtListTit)
class  CmtList extends React.Component{
    constructor(props){
        super(props)

        //定义当前评论列表组件的私有数据
        this.state ={
            cmts:[
                {user:'张三',content:'哈哈哈,沙发'},
                {user:'张三',content:'哈哈哈,龙椅'},
                {user:'张三',content:'哈哈哈,山炮'},
            ]
        }
    }

    render() {
        //这是循环评论列表的方式1，比较low，要使用jsx方式才高端
        // var arr = []
        // this.state.cmts.forEach((item,index)=>{
        //     arr.push(<h1 >{item.user}</h1>)
        // })
        return (
            <div>
            <h1 className= {cmtListTit.cmtListTitle}>评论列表案例</h1>
            {this.state.cmts.map((item,index)=>{
                return <CmtItem {...item} key={index}></CmtItem>
            })}
         </div> 
        )
    }
}
export default CmtList
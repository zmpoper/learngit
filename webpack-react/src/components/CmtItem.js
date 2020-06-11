import React from "react"
import inlineStyle from './cmtItemStyles.js'
function CmtItem(props){
    //样式优化1
    // const boxStyle = {border:'1px solid gray',margin:'10px 0',paddingLeft:15 }
    // const titleStyle = {fontSize:16,color:'purple'}
    // const bodyStyle = {fontSize:14,color:'red'}


    //样式优化2 封住为一个对象  继续优化 抽离出来一个文件
    // const inlineStyle ={
    //     boxStyle: {border:'1px solid gray',margin:'10px 0',paddingLeft:15 },
    //     titleStyle: {fontSize:16,color:'purple'},
    //     bodyStyle:{fontSize:14,color:'red'} 

    // }
    //如果是要使用style属性，为jsx语法创建的DOM元素，设置样式，不能像网页中那样写样式
    //外层的花括号表示写js，内层的花括号表示对象
    //在style的样式规则中，如果属性值的单位是px，则px可以省略
    //paddingLeft:'15px' 写成 paddingLeft: 15 注意区别单引号
    return<div style={inlineStyle.boxStyle}>
    <h1 style={inlineStyle.titleStyle}>评论人:{props.user}</h1>
    <h3 style={inlineStyle.bodyStyle}>评论内容:{props.content}</h3>
    </div>
}
export default CmtItem
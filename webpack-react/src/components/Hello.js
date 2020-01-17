import React from 'react'
// 第一种创建组件的方式
function Hello(props) {
    // console.log(params)
    return <div>
        <h1>这是在Hello组件中定义的元素---{props.name}</h1>
    </div>
}


//把创建的组件暴露出去
export default Hello

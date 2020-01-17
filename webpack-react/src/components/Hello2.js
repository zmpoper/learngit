//第二种创建组件的方式
//使用class创建的类，通过extends关键字，继承了ReactComponent之后，这个类，
//就是一个组件的模版了
import React from 'react'
class Hello2 extends React.Component{
    constructor(props) {
        super(props)

        //相当于vue中组件的data(){return}
        this.state = {
            msg:"这是Hello2组件的私有msg数据",
            info:"hello2"
            
        }
        //在constructor中，如果想要访问props，不能直接访问this.props,必须要先定义
        // console.log(props);
        
    }
    //class实现组件内部，必须定义render函数
    //class组件可以直接使用this.props.获取传参的值，function定义组件的话，则必须先
    //定义props才可以使用props
    //props不管在class中还在function组件中都是只读的，不能修改！！！！
    render () {
        return <div>
            <h1>这是使用Hello2----class类创建的组件：{this.props.age}----{this.state.msg}</h1>
        </div>
    }
}

export default Hello2
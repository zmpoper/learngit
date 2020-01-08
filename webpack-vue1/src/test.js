//node中向外暴露成员的形式：
//module.exports = {}


//在ES6中，也通过 规范的形式，规定了ES6中如何导入和导出 模块

//导入模块： import 模块名称 form '模块标识符'  import '表示路径'

//导出，向外暴露成员： export default 和 export 向外暴露成员
//在一个模块中（一个js文件就是一个模块），export default 只允许向外暴露1次,所以导入时可以指定任意变量
//在一个模块中，可以同时使用export default(只能暴露一个)和export（可以暴露出多个成员）
//使用export向外暴露的成员，只能使用{}的形式来接收，这种形式，叫做【按需导出】，必须按照名称来接收，当然接收时也可以as别名详见main.js
export default {
    name:'zs',
    age:20
}
export var title = {
    address:'bj'
}


//node中使用 var 名称 = require('模块标示符')
//module.exports 和 exports 来暴露成员
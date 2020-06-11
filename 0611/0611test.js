//对应导出模块方法1
// var module = require('./0611.js')
// var ret = module.sum(12,13);
// console.log(ret);


//对应导出模块方法2

// var sum = require('./0611.js')
// var ret = sum(12,15);
// console.log(ret);


//导入json文件
var m = require('./data.json');
console.log(m);
console.log(m.username);

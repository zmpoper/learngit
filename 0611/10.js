/**
 * post参数处理
 * 与get不同，post参数不能通过url来处理
 */
const querystring = require('querystring');

//parse方法的作用就是把字符串转成对象
let param = 'username=lis&password=123';
let obj = querystring.parse(param);
console.log(obj);


let obj1 = {
    flag : '123',
    abc : ['hello','ni']
}
//stringify方法的作用是把对象转成字符串
let str1 = querystring.stringify(obj1);
console.log(str1);
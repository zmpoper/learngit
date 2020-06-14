/**
 * get参数处理
 */
const url = require('url');

let str = 'http://www.baidu.com/abc?flag=123&keyword=java';
//将字符串转成对象
let ret = url.parse(str,true);//最好加上true这样query就是一个对象方便取值
console.log(ret.query.flag);



let obj =  {
    protocol: 'http:',
    slashes: true,
    auth: null,
    host: 'www.baidu.com',
    port: null,
    hostname: 'www.baidu.com',
    hash: null,
    search: '?flag=123&keyword=java',
    query: 'flag=123&keyword=java',
    pathname: '/abc',
    path: '/abc?flag=123&keyword=java',
    href: 'http://www.baidu.com/abc?flag=123&keyword=java'
  };
let ret1 = url.format(obj);
console.log(ret1);


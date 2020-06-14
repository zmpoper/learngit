/**
 * express托管静态文件
 * 
 * 可以指定虚拟目录
 * 可以指定多个目录作为静态资源目录
 */

 const express = require('express');
 const app = express();

// let server = app.use(express.static('public'));

//实现虚拟路径
let server = app.use('/abc',express.static('public'));
//如果要使用多个静态资源目录，需要多次调用express.static
app.use(express.static('hello'));
//直接用url+/文件名访问，不需要加public
server.listen(3000,()=>{
    console.log('running...');
});

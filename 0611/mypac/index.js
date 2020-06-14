/**
 * 初步实现服务器功能
 */

 const http = require('http');
//  //创建服务器实例对象
// let server = http.createServer();
// server.on('request',(req,res)=>{
//     res.end('hello');
// })
// //监听端口
// server.listen(3000)
// console.log('3000端口启用');

//第二种方式更简洁
http.createServer((req,res)=>{
    // res.end('ok');
    //处理请求路径的分发
    //1、req对象是Class: http.IncomingMessage的实例对象
    //2、res对象是Class: http.ServerResponse的实例对象
    // res.end(req.url); 返回访问路径
    if(req.url.startsWith('/index')){
        //write向客户端写回内容,可以写多次
        res.write('hello');
        res.write('ni hao');
        //end用来完成响应，只能执行一次，也可以不加参数
        res.end('index');
    }else if(req.url.startsWith('/about')){
        res.end('about');
    }else{
        res.end('no content');
    }
}).listen(3000,()=>{
    console.log('running 3000 ');
});


/**
 * post 参数处理
 * 基于事件的处理，与get直接获取数据不同
 */

 const querystring = require('querystring');
 const http = require('http');

 http.createServer((req,res)=>{
     if(req.url.startsWith('/login')){
        let pdata='';
        req.on('data',(chunk)=>{
            pdata+=chunk;

        })
        req.on('end',()=>{
            console.log(pdata);
            //将字符串转成对象
            let obj = querystring.parse(pdata);
            res.end(obj.username+'-----'+obj.password);
        })
     }
     
 }).listen(3000,()=>{
     console.log('running 3000');
 })
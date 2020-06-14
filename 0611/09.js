/**
 * get参数处理
 */
const http = require('http');
const path = require('path');
const url = require('url');

http.createServer((req,res)=>{
    //url.prase将url字符串转成对象
    let obj = url.parse(req.url,true);
    res.end(obj.query.username);

}).listen(3000,()=>{
    console.log('running 3000');
})
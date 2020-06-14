/**
 * 动态网站开发
 * 成绩查询功能
 */

 const http = require('http');
 const path = require('path');
 const fs = require('fs');
 const querystring = require('querystring');
 const scoreData = require('./scores.json')
 http.createServer((req,res)=>{
     //路由（请求路径+请求方式）
    //查询成绩的入口地址 /query
    if(req.url.startsWith('/query')&&req.method == 'GET'){
        fs.readFile(path.join(__dirname,'view','index.html'),'utf-8',(err,content)=>{
            if(err){
                res.writeHead(500,{
                    'Content-Type':'text/plain;charset=utf8'
                });
                res.end('服务器错误，请与管理员联系');
            }
            res.end(content);
        })

    }else if(req.url.startsWith('/score'))
    {
        //⚠️如果没有获取到值，很可能是html或者模版文件中method没有设置成POST提交方式，默认是GET
        //下面是POST方式获取值的写法，所以是接收不到GET方式传输的值的
        //获取成绩的结果 /score
        let pdata = '';
        req.on('data',(chunk)=>{
            pdata += chunk;
            console.log(pdata);
        });
        req.on('end',()=>{
            //获取到code
            let obj = querystring.parse(pdata);
            console.log(obj);
            //将json文件中匹配学号的对象给到result
            let result = scoreData[obj.code];
            console.log(result);
            fs.readFile(path.join(__dirname,'view','result.html'),'utf8',(err,content)=>{
                if(err){
                    res.writeHead(500,{
                        'Content-Type':'text/plain;charset=utf8'
                    });
                    res.end('服务器错误，请与管理员联系');
                }
                //返回内容之前进行数据渲染
                content = content.replace('$$chinese$$',result.chinese);
                content = content.replace('$$math$$',result.math);
                content = content.replace('$$english$$',result.english);
                content = content.replace('$$summary$$',result.summary);
                res.end(content);
            });
        });


    }

 }).listen(3000,()=>{
     console.log('running 3000');
 });
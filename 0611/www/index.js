/**
 * 响应完整的页面信息
 */
const http = require('http');
const path = require('path');
const fs = require('fs');
/**该方式需要各种if-else太繁琐，建议第二种方式 */
// //根据路径读取文件的内容，并且响应到浏览器
// let readFile = (fileName,res)=>{
//     fs.readFile(path.join(__dirname,fileName),'utf-8',(err,fileContent)=>{
//         if(err){
//             res.end('server error');
//         }else{
            
//             res.end(fileContent);
//         }
//     })
// }
// //处理路径的分发
// http.createServer((req,res)=>{
//     if(req.url.startsWith('/index')){
//        readFile('index.html',res);
//     }else if(req.url.startsWith('/about')){
//        readFile('about.html',res);

//     }else if(req.url.startsWith('/list')){
//        readFile('list.html',res);

//     }else{
//         //防止乱码 加入头信息
//         res.writeHead(200,{
//             'content-type':'text/plain;charset=utf8'
//         });
//         res.end('页面没找到');
//     }
// }).listen(3000,()=>{
//     console.log('running 3000');
// })

/**方式二 */
http.createServer((req,res)=>{
    fs.readFile(path.join(__dirname,req.url),(err,fileContent)=>{
        if(err){
            res.writeHead(404,{
                'content-type':'text/plain;charset=utf8' 
            });
            res.end('页面没找到');
        }else{
            console.log(req.url);
            res.end(fileContent);
        }
    });
}).listen(3000,()=>{
    console.log('running 3000');
});

/*入口文件 */
// var md = require('markdown-it')();
// var result = md.render('# markdown-it rulezz!');
// console.log(result);

// //获取markdown文件
// const path = require('path');
// const fs = require('fs');

// let tplPath = path.join(__dirname, 'tpl.html');
// let mdPath = path.join(__dirname,'demo.md');
// let targetPath = path.join(__dirname,'demo.html');


// fs.readFile(mdPath,'utf-8',(err,data)=>{
//     if(err) return;
//     //对markdwon内容进行转换操作
//     let result = md.render(data);
//     console.log(result);

//     //读取模版内容
//     let tpl = fs.readFile(tplPath,'utf-8',(err,tplData)=>{
//         if(err) return;
//         tplData=tplData.replace('<%content%>',result);
//         //生成的最终页面写入目标文件
//         fs.writeFile(targetPath,tplData,(err)=>{
//             console.log('转换完成');

//         });

//     });
// });
/*
    图书管理系统-入口文件
    */
const express = require('express');
const router = require('./router.js');
const path = require('path');

const template = require('art-template');
const bodyParser = require('body-parser');
const app = express();
// const hostname = '192.168.1.2';
const hostname = '127.0.0.1';
const port = 1337;

//设置跨域访问 是为了方便VUE项目调用api接口针对json
app.all('/api*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "content-type");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");

    next();

});
// app.all('*', function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "content-type");
//     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By", ' 3.2.1')
//     res.header("Content-Type", "application/json;charset=utf-8");

//     next();

// });
//启动静态资源服务
app.use(express.static('public', { index: 'login.html' }));
// app.use(express.static('public'));
//设置模版引擎
//设置模版的路径
app.set('views', path.join(__dirname, 'views'));
//设置模版引擎
app.set('view engine', 'art');
//使express兼容art-template模版引擎
app.engine('art', require('express-art-template'));
//处理请求参数
//挂载参数处理中间件(post)
app.use(bodyParser.urlencoded({ extended: false }));
//处理json格式的参数
app.use(bodyParser.json());

//启动服务器功能
//配置路由
app.use(router);
//监听端口
app.listen(port, () => {
    console.log('zhoumin');
    console.log(`Server running at http://${hostname}:${port}/`);
});



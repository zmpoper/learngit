/**
 * 应用中间件
 */
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
//挂载内置中间件
app.use(express.static('public'));
//挂载参数处理中间件（post）
app.use(bodyParser.urlencoded({ extended: false }));

//处理get请求没有用到bodyParser插件
app.get('/login',(req,res)=>{
    let data = req.query;
    console.log(data);
    res.send('get data');
})

//处理post请求
app.post('/login',(req,res)=>{
    let data = req.body;
    console.log(data);
    if(data.username == 'admin' && data.password == '1'){
        res.send('0k')
    }else{
        res.send('登录验证失败')
    }
});
app.listen(3000,()=>{
    console.log('running...');
});
/***
 * 路由（根据请求路径和请求方式进行路径分发处理）
 * http的常用请求方式：
 * get 查询
 * post 添加
 * put 更新
 * delete 删除
 * 
 * restful api（一种URL的格式）
 */
const express = require('express');
const app = express();

//直接使用use分发可以处理所有的路由请求
app.use((req,res)=>{
    res.send('ok');
});

//表单只支持get和post
//get查询
app.get('/',(req,res)=>{
    res.send('get data')
});
//post添加
app.post('/',(req,res)=>{
    res.send('post data')
});
//put更新
app.put('/',(req,res)=>{
    res.send('put data')
});
//delete 删除
app.delete('/',(req,res)=>{
    res.send('delete data')
});

app.listen(3000,()=>{
    console.log('running....');
});
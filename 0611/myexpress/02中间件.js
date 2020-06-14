/**
 * 中间件的挂载方式
 * use
 * 路由方式：get post put delete
 * 
 */

 const express = require('express');
 const app = express();

 /**这里/abc路径绑定了两个中间件  use也同理见01中间件.js */
 app.get('/abc',(req,res,next)=>{
     console.log('1');
     //跳转到下一个路由
     next('route');/**去执行3 use中不能跳到下个路由，在use中这样写等同于next()只会跳到下个中间件*/
     /**直接调用next()会执行2 use也同理见01中间件.js*/
 },(req,res)=>{
     console.log('2');
     res.send('abc');
 });

 app.get('/abc',(req,res)=>{
     console.log('3');
     res.send('hello');
 })
app.listen(3000,()=>{
    console.log('running....');
})
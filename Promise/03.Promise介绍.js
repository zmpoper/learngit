//1, Promise是一个构造函数，既然是构造函数，那么，我们就可以 new Promise() 得到一个Promise的实例
//2, 在Promise上，有两个函数，分别叫做resolve（成功之后的回调函数）和 reject(失败之后的回调函数)
//3，在 Promise 构造函数的 Prototype属性上，有一个，then()方法，也就是说，只要是
//Promise构造函数创建的实例，都可以访问到.then()方法
//4，Promise 表示一个 异步操作；每当我们new 一个 Promise 的实例，这个实例，就表示
//一个具体的异步操作；
//5，既然Promise创建的实例，是一个异步操作，那么，这个异步操作的结果，只有两种状态：
//5.1 状态1:异步执行成功了，需要在内部调用 resolve把结果返回给调用者
//5.2 状态2: 异步执行失败了，需要在内部调用 reject 把结果返回给调用者
//5.3 由于Promise的实例，是一个异步操作，所以，内部拿到操作的结果后，无法使用return把操作的
//结果返回给调用者，这时候，只能使用回调函数的形式，来把成功或失败的结果，返回给调用者
//6，我们可以在new 出来的Promise实例上调用.then方法，【预先】为这个 Promise
//异步操作，指定成功resolve和失败reject回调函数


//注意：这里new出来的promise，只是代表【形式上】的一个异步操作；
//什么是形式上的异步操作：就是说，我们只知道它是一个异步操作，但是做什么具体的异步事情，目前还不清楚
//var promise = new Promise()

//这是一个具体的异步操作，其中，使用function 指定一个具体的异步操作
// var promise = new Promise(function(){
//     //这个 function 内部写的就是具体的异步操作！！！
    
// })


const fs = require('fs')
//每当new一个 Promise 实例的时候，就会立即 执行这个 异步操作中的代码
//也就是说，new 的时候，除了能够得到一个promise 实例之外，还会立即调用 我们为Promise
//构造函数传递的那个function，执行这个function中的异步操作代码
// var promise = new Promise(function(){

//     fs.readFile('./files/2.txt','utf-8',(err,dataStr)=>{
//         if (err) throw err
//         console.log(dataStr);
//     })
// })

//初衷： 给路径，返沪读取到的内容
function getFilePath(fpath){
    return  new Promise(function(resolve,reject){

        fs.readFile(fpath,'utf-8',(err,dataStr)=>{
            // if (err) throw err
            // console.log(dataStr);
            if(err) reject(err) 
            resolve(dataStr)
        })
    })
    
}
getFilePath('./files/1.txt').then(function(data){
    console.log(data+'-----');
},function(err){
    console.log(err.message);
})

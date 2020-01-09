const fs = require('fs')
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
//先读取文件1，再读取2，最后读取3
//注意：通过.then 指定 回调函数的时候，成功的 回调函数必须传，但是，失败的回调函数可以省略不传

//如果前面的Promise 执行失败，我们不想后续的Promise操作终止，可以指定失败的回调中return
// getFilePath('./files/11.txt').then(function(data){
//     console.log(data+'-----');
//     return getFilePath('./files/2.txt')
// },function(err){
//     console.log('这是失败的结果:'+err.message);
//     return getFilePath('./files/2.txt')
// })
// .then(function(data){
//     console.log(data+'-----');
//     return getFilePath('./files/3.txt')
// })
// .then(function(data){
//     console.log(data+'----');
// })

// console.log('okokok');

//如果后面的Promise依赖于前面Promise执行的结果，如果前面的失败了，后面的不执行
getFilePath('./files/1.txt').then(function(data){
    console.log(data+'-----');
    return getFilePath('./files/22.txt')
})
.then(function(data){
    console.log(data+'-----');
    return getFilePath('./files/3.txt')
})
.then(function(data){
    console.log(data+'----');
})
.catch(function(err){
    console.log('这是自己的处理方式'+err.message);
})
console.log('ok');
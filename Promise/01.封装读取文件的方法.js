const fs = require('fs')
const path = require('path')


// fs.readFile(path.join(__dirname,'./files/1.txt'),'utf-8',(err,dataStr)=>{
//     if(err) throw err
//     console.log(dataStr);
// })

function getFileByPath(fpath,callback){
    fs.readFile(fpath,'utf-8',(err,dataStr)=>{
        if(err) return callback(err)
        // console.log(dataStr);
        // return dataStr
        callback(null,dataStr)
    })
}

// var result=getFileByPath(path.join(__dirname,'./files/1.txt'))
// console.log(result);

getFileByPath(path.join(__dirname,'./files/1111.txt'),(err,dataStr)=>{
    if(err) return console.log(err.message);
    console.log(dataStr);
})

const http = require('http');

let options = {
    protocol : 'http:',
    hostname : 'localhost',
    port : 1337,
    path : '/books'
}

let req = http.request(options,(res)=>{
    let info = '';

    res.on('data',(chunk)=>{
        info+=chunk;
    })
    res.on('end',()=>{
        console.log(info);
    })
});

req.end();
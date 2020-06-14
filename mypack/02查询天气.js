/**
 * 调用第三方接口：获取天气
 * http://www.weather.com.cn/data/sk/101010100.html
 */
const http = require('http');
const querystring = require('querystring');

let cityCode = '101010100'
let options = {
    protocol : 'http:',
    hostname : 'www.weather.com.cn',
    port : 80,
    path : '/data/sk/'+cityCode+'.html',
    method : 'get'
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
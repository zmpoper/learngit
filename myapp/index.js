var express = require('express');
const hostname = '127.0.0.1';
const port = 1337;
const path = require('path');

var app = express();
// 静态页面路由
app.use(express.static(__dirname));
//动态页面post路由
app.post('/WechatIMG3.jpeg',(req,res)=>{
    console.log(req.originalUrl);
    
     res.sendfile(path.join(__dirname,req.originalUrl));

});


app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log("__dirname=%s", __dirname);
  console.log("path=%s", path);
});

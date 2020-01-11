/*
    业务模块
    */
const fs = require('fs');
// let data = require('./data.json');
const path = require('path');
const db = require('./db.js');

var strVar = "";
    strVar += "<!DOCTYPE html><html>\n";
    strVar += "<head><meta charset=\"utf-8\"/><script src=\"http://code.jquery.com/jquery-latest.min.js\"><\/script><\/head>\n";
    strVar += "<body>\n";
    strVar += "<div id=\"wrap\"><div id=\"header\"><h1>html在线工具<\/h1>\n";
    strVar += "<!--   如果有用，请别忘了推荐给你的朋友：		-->\n";
    strVar += "<!--   Html在线美化、格式化：https://tool.lu/html   -->\n";
    strVar += "<\/div>\n";
    strVar += "<div id=\"main\">\n";
    strVar += "	<!-- [history] -->\n";
    strVar += "	<dl>\n";
    strVar += "	<dt>v1.0<\/dt> <dd>2011-06-05 Html工具上线<\/dd>\n";
    strVar += "	<dt>v1.1<\/dt> <dd>2012-01-14 修复美化功能，增加压缩<\/dd>\n";
    strVar += "	<dt>v1.2<\/dt> <dd>2012-07-20 增加清除链接功能<\/dd>\n";
    strVar += "	<dt>v1.3<\/dt> <dd>2014-08-05 修改 html 压缩引擎<\/dd>\n";
    strVar += "	<dt>v1.4<\/dt> <dd>2014-08-09 增加转换为js变量的功能<\/dd>\n";
    strVar += "	<\/dl>\n";
    strVar += "<\/div>\n";
    strVar += "<div id=\"footer\">This is just an example.<\/div>\n";
    strVar += "<\/div>\n";
    strVar += "<\/body><\/html>\n";
// //自动生成图书编号（自增）
// let maxBookCode = () => {
//     let arr = [];
//     data.forEach((item) => {
//         arr.push(item.id);
//     });
//     return Math.max.apply(null, arr);
// }
// //把内存数据写入文件
// let writeDataToFile = (res) =>{
//     //把内存中的数据写入文件
//     fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(data,null,4), (err) => {
//         if (err) {
//             res.send('server error');
//         }
//         //文件写入成功之后重新跳转到主页面
//         res.redirect('/index');

//     });
// }
//到登录页面
// exports.login = (req ,res) =>{
//     res.render('login');
// }
//登录
exports.check = (req ,res) =>{
    let param = req.body;

    let sql = 'select count(*) as total from test_user where name=? and id=?';
    let data = [param.username,param.password];

    db.base(sql,data,(result)=>{
        if(result[0].total == 1){
            res.redirect('/index.html'); 
        }else{
            res.send('login failure');
        }
    });
}
//渲染主页面
exports.allBook = (req, res) => {
    let sql = 'select * from book';
    db.base(sql,null,(result)=>{
        res.json(result);
    });
}
// //跳转到添加图书的页面
// exports.toAddBook = (req, res) => {
    
//     res.render('addBook', {});
// }
//添加图书保存数据
exports.addBook = (req, res) => {
    //获取表单数据
    let info = req.body;
    console.log(info);
    let sql = 'insert into book set ?';
    if (info.name!=null){
        db.base(sql,info,(result)=>{
            if(result.affectedRows == 1){
                res.json({flag:1});
            }else{
                res.json({flag:2});
            }
        });
    }
    else{
        res.json({flag:2});
    }
    // book.id = maxBookCode() + 1;
    // data.push(book);
    // //把内存中的数据写入文件
    // writeDataToFile(res);
}
//跳转到修改图书的页面
exports.getBookById = (req, res) => {
    let id = req.params.id;
    let sql = 'select * from book where id = ?';
    let data = [id];
    db.base(sql,data,(result)=>{
    
        res.json(result[0]);

    });
    // let book = {}
    // data.forEach((item)=>{
    //     if(id == item.id){
    //         book = item;
    //         return;
    //     }
       
    // })
}
//修改图书更新数据
exports.editBook = (req,res) =>{
    let info = req.body;
    let sql = 'update book set name=?, author=?,category=?,description=? where id = ?';
    let data = [info.name,info.author,info.category,info.description,info.id];
    db.base(sql,data,(result)=>{
        if(result.affectedRows == 1){
            res.json({flag:1});
        }else{
            res.json({flag:2});
        }
    });
    // data.forEach((item)=>{
    //     if(info.id == item.id){
    //         for(let key in info){
    //             item[key] = info[key];
    //         }
    //         return;
    //     }
    // });
    // //把内存中的数据写入文件
    // writeDataToFile(res);

}
//删除图书
exports.delBook = (req,res)=>{
    console.log("zhouomin");
    let sql = 'delete from book where id = ?';
    let data = [req.params.id];
    console.log(data+'zhoumin');
    db.base(sql,data,(result)=>{
        if(result.affectedRows == 1){
            console.log('成功');
            
            res.json({flag:1});
        }else{
            res.json({flag:2});
        }
    });
    // data.forEach((item,index)=>{
    //     if(req.query.id == item.id){
    //         //删除数组的一项数据
    //         data.splice(index,1);
    //     }
    //     return;
    // });
    // //把内存写入文件
    // writeDataToFile(res);

}
//轮播图测试数据
exports.getLunbo = (req, res) => {
    res.json([{url:"https://www.baidu.com",img:"http://localhost:1337/img/muwu.jpg"},
    {url:"https://www.baidu.com",img:"http://localhost:1337/img/yuantiao.jpg"}])
}


//新闻资讯测试数据
exports.getNewsList =(req,res) =>{
    res.json([{id:15,title:"1季度多家房企利润跌幅超50%",add_time:"2015-04-16T03:50:28.000Z",zhaiyao:"克而瑞研究中心统计",click:1,img_url:"http://localhost:1337/img/yuantiao.jpg"},
    {id:1,title:"1季度多家房企利润跌幅超50%",add_time:"2015-04-16T03:50:28.000Z",zhaiyao:"克而瑞研究中心统计",click:1,img_url:"http://localhost:1337/img/yuantiao.jpg"},
    {id:2,title:"1季度多家房企利润跌幅超50%",add_time:"2015-04-16T03:50:28.000Z",zhaiyao:"克而瑞研究中心统计",click:1,img_url:"http://localhost:1337/img/yuantiao.jpg"},
    {id:3,title:"1季度多家房企利润跌幅超50%",add_time:"2015-04-16T03:50:28.000Z",zhaiyao:"克而瑞研究中心统计",click:1,img_url:"http://localhost:1337/img/yuantiao.jpg"},
    {id:4,title:"1季度多家房企利润跌幅超50%",add_time:"2015-04-16T03:50:28.000Z",zhaiyao:"克而瑞研究中心统计",click:1,img_url:"http://localhost:1337/img/yuantiao.jpg"},
    {id:5,title:"1季度多家房企利润跌幅超50%",add_time:"2015-04-16T03:50:28.000Z",zhaiyao:"克而瑞研究中心统计",click:1,img_url:"http://localhost:1337/img/yuantiao.jpg"},
    {id:6,title:"1季度多家房企利润跌幅超50%",add_time:"2015-04-16T03:50:28.000Z",zhaiyao:"克而瑞研究中心统计",click:1,img_url:"http://localhost:1337/img/yuantiao.jpg"},
    {id:7,title:"1季度多家房企利润跌幅超50%",add_time:"2015-04-16T03:50:28.000Z",zhaiyao:"克而瑞研究中心统计",click:1,img_url:"http://localhost:1337/img/yuantiao.jpg"},
    {id:8,title:"1季度多家房企利润跌幅超50%",add_time:"2015-04-16T03:50:28.000Z",zhaiyao:"克而瑞研究中心统计",click:1,img_url:"http://localhost:1337/img/yuantiao.jpg"},
    {id:9,title:"1季度多家房企利润跌幅超50%",add_time:"2015-04-16T03:50:28.000Z",zhaiyao:"克而瑞研究中心统计",click:1,img_url:"http://localhost:1337/img/yuantiao.jpg"},
    {id:10,title:"1季度多家房企利润跌幅超50%",add_time:"2015-04-16T03:50:28.000Z",zhaiyao:"克而瑞研究中心统计",click:1,img_url:"http://localhost:1337/img/yuantiao.jpg"},
    {id:11,title:"1季度多家房企利润跌幅超50%",add_time:"2015-04-16T03:50:28.000Z",zhaiyao:"克而瑞研究中心统计",click:1,img_url:"http://localhost:1337/img/yuantiao.jpg"},
    {id:12,title:"1季度多家房企利润跌幅超50%",add_time:"2015-04-16T03:50:28.000Z",zhaiyao:"克而瑞研究中心统计",click:1,img_url:"http://localhost:1337/img/yuantiao.jpg"},
    {id:13,title:"1季度多家房企利润跌幅超50%",add_time:"2015-04-16T03:50:28.000Z",zhaiyao:"克而瑞研究中心统计",click:1,img_url:"http://localhost:1337/img/yuantiao.jpg"},
    {id:14,title:"1季度多家房企利润跌幅超50%",add_time:"2015-04-16T03:50:28.000Z",zhaiyao:"克而瑞研究中心统计",click:1,img_url:"http://localhost:1337/img/yuantiao.jpg"},
])
}
//新闻资讯点击后测试数据

exports.getNewsInfo =(req,res) =>{
    res.json({id:15,title:"1季度多家房企利润跌幅超50%",add_time:"2015-04-16T03:50:28.000Z",zhaiyao:"克而瑞研究中心统计",click:1,content:strVar})
}

//评论测试数据
exports.getComments =(req,res) =>{
    res.json([{user_name:"李白",add_time:"2015-04-16T03:50:28.000Z",content:"评论评论评论"},{user_name:"李白",add_time:"2015-04-17T03:50:28.000Z",content:"评论评论评论"},{user_name:"李白",add_time:"2015-04-18T03:50:28.000Z",content:"评论评论评论"}
,{user_name:"李白",add_time:"2015-04-19T03:50:28.000Z",content:"评论评论评论"},{user_name:"李白",add_time:"2015-04-20T03:50:28.000Z",content:"评论评论评论"},
{user_name:"李白",add_time:"2015-04-21T03:50:28.000Z",content:"评论评论评论"},{user_name:"李白",add_time:"2015-04-22T03:50:28.000Z",content:"评论评论评论"},
{user_name:"李白",add_time:"2015-04-23T03:50:28.000Z",content:"评论评论评论"}])
}

//发表评论
exports.postComment = (req, res) => {
    //获取表单数据
    // let info = req.body;
    // console.log(info);
    // let sql = 'insert into book set ?';
    // if (info.name!=null){
    //     db.base(sql,info,(result)=>{
    //         if(result.affectedRows == 1){
    //             res.json({flag:1});
    //         }else{
    //             res.json({flag:2});
    //         }
    //     });
    // }
    // else{
    //     res.json({flag:2});
    // }
    res.json({flag:1})
}
//滑动列表
exports.getImgCate = (req,res)=>{
    res.json([{title:"家居生活",id:1},{title:"摄影设计",id:2},{title:"明星美女",id:3},{
        title:"小吃美食",id:4 },{title:"旅游景点",id:5}])
}
//图片
exports.getImage = (req, res) => {
    res.json([{id:1,title:"标题",zhaiyao:"摘要",img_url:"http://localhost:1337/img/muwu.jpg"},
    {id:2,title:"标题",zhaiyao:"摘要",img_url:"http://localhost:1337/img/yuantiao.jpg"},
    {id:3  ,title:"标题",zhaiyao:"摘要",img_url:"http://localhost:1337/img/shuijiao.jpg"},
    {id:4,title:"标题",zhaiyao:"摘要",img_url:"http://localhost:1337/img/qrcode.png"}
    ])
}
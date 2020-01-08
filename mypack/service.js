/*
    业务模块
    */
const fs = require('fs');
// let data = require('./data.json');
const path = require('path');
const db = require('./db.js');
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
/*
    路由模块
*/
const express = require('express');
const router = express.Router();

const service = require('./service.js');


// //路由处理
// //到登录页面
// router.get('/',service.login);
// //登录验证
router.post('/check',service.check);
// //渲染主页
// router.get('/index',service.showIndex);
// //添加图书（跳转到添加图书的页面）
// router.get('/toAddBook',service.toAddBook);
// //添加图书
// router.post('/addBook',service.addBook);
// //修改图书(跳转到修改图书的页面)
// router.get('/toEditBook',service.toEditBook);
// //修改图书提交表单
// router.post('/editBook',service.editBook);
// //删除图书
// router.get('/delBook',service.delBook);


//提供所有的图书信息
router.get('/books',service.allBook);
//添加图书信息时提交数据
router.post('/books/book',service.addBook);
//编辑图书时根据id查询相应信息
router.get('/books/book/:id',service.getBookById);
//提交编辑的数据
router.put('/books/book',service.editBook);
//删除图书信息
router.delete('/books/book/:id',service.delBook);

//轮播图测试数据模拟
router.get('/api/getlunbo',service.getLunbo);

//新闻资讯测试数据模拟
router.get('/api/getnewslist',service.getNewsList);

//新闻资讯点击后详情展示数据模拟
router.get('/api/getnewsinfo/:id',service.getNewsInfo);

//评论数据模拟
router.get('/api/getcomments/:id',service.getComments);

//发表评论数据模拟
router.post('/api/postcomment/:id',service.postComment);

//图片-分类数据模拟
router.get('/api/getimgcategory',service.getImgCate)

//图片
router.get('/api/getimage/:id',service.getImage)

//图片详情
router.get('/api/getimageInfo/:id',service.getImageInfo)

//图片绿缩图
router.get('/api/getthumimages/:id',service.getThumImages)

//商品列表
router.get('/api/getgoodslist',service.getGoodsList)

//商品详情
router.get('/api/goods/getinfo/:id',service.getGoodsInfo)

//商品图文测试数据
router.get('/api/goods/getdesc/:id',service.getDesc)

//购物车页面商品
router.get('/api/goods/getshopcarlist/:ids',service.getShopCar)
module.exports = router;
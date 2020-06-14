/**
 * restful api 是从URL的格式来表述的
 *get http://localhost:3000/books 查询所有的书籍信息
 *get http://localhost:3000/books/book 添加图书页面
  post http://localhost:3000/books/book 提交添加图书
  get http://localhost:3000/books/book/1 编辑某一个图书
  put http://localhost:3000/books/book 提交更新编辑图书的信息
  delete http://localhost:3000/books/book/2 删除某一个图书



  传统的URL风格
  http://localhost:3000/ 查询所有的书籍信息
  http://localhost:3000/toAddBook 添加图书页面 
  http://localhost:3000/addBook 提交添加图书
  http://localhost:3000/toEditBook?id=1 编辑某一个图书
  http://localhost:3000/editBook 提交更新编辑图书的信息
  http://localhost:3000/deleteBook?id=2 删除某一个图书信息
  */
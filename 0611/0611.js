//全局成员
//包含文件名称的全路径
console.log(__filename);
//不包含文件名称的路径
console.log(__dirname);

//定时函数
var timer = setTimeout(function () {
    console.log(123);
    
},1000);

setTimeout(function () {
    clearTimeout(timer);
  },2000);

  //argv是一个数组，默认情况下：node执行环境的路径、当前执行文件的全路径
  //从第三个参数开始表示命令行接收的参数：比如node 0611.js 333
  //会将333当作数组的第三个成员
  console.log(process.argv);

  //打印当前系统的架构是多少位的
  console.log(process.arch);

  /*
  模块化开发
  传统非模块化开发有如下的缺点：
  1.命名冲突
  2.文件依赖
  前端标准的模块化规范；文件加载异步
  1、AMD -requirejs
  2、CMD -seajs
  服务器端的模块化规范：文件加载同步
  1、CommonJS - Node.js

  模块化相关的规则：
  1、如何定义模块：一个js文件就是一个模块，模块内部的成员都是相互独立
  2、模块成员的导出和引入

  */
 var sum = function (a,b) {
     return parseInt(a)+ parseInt(b);
 }

 //导出模块成员方法1
//  exports.sum = sum;
 //导出模块成员方法2
 module.exports = sum;

 //模块导出另一种方式是global 不常用
 //已经加载的模块会缓存

 //模块文件的后缀3中情况.js .json .node  如果引入模块的时候不加后缀的话
 //就按照这三个后缀的顺序依次查找，优先找js，其次json，最后node

 /**
  * 全局安装 -g 全局安装的包一般用于命令行工具 比如cnpm
  * 本地安装 一般用于开发某种具体的功能
  * npm常用的命令：
  * 1、安装包
  * npm install -g 包名称（全局安装）
  * 全局安装的包都在/usr/local/lib/node_modules路径下面
  * npm install 包名称（本地安装）
  * 2、安装包的时候可以指定版本（本地包不用-g)
  * npm install -g 包名@版本号
  * 3、卸载包(本地包不用-g)
  * npm uninstall -g 包名
  * 4、更新包（更新到最新版本）其实也可以直接用install
  * npm update -g 包名
  * 
  * hello目录中演示如何生成一个包，并且如何使用一个包
  * 
  * npm安装包的两个选项
  * npm install 包名 --save  向生产环境添加依赖 dependencies
  * npm install 包名 --save-dev 向开发环境添加依赖 DevDependencies
  * 
  * npm install --production 会根据package.json中的dependencies
  * 安装依赖的包（生产环境） 
  * 
  * npm install 会安装所有（包含生产环境和开发环境，也就是dependencies和DevDependencies)
  * 
  * 
  * yarn工具基本使用
  * 安装yarn工具：npm install -g yarn
  * 
  * 1、初始化包
  * npm init
  * yarn init
  * 2、安装包
  * npm install xxx --save
  * yarn add xxx
  * 3、移除包
  * npm install xxx
  * yarn remove xxx
  * 4、更新包
  * npm update xxx
  * yarn upgrade xxx
  * 5、安装开发依赖的包
  * npm install xxx --save-dev
  * yarn add xxx -dev
  * 6、全局安装
  * npm install -g xxx
  * yarn global add xxx
  * 7、设置下载镜像的地址
  * npm config set registry url
  * yarn config set registry url
  * 8、安装所有依赖
  * npm install
  * yarn install
  * 9、执行包
  * npm run
  * yarn run
  */
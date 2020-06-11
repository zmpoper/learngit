console.log('hello');
/**
 * 在hello目录下执行npm init -y生成package.json
 * 
 * 两种执行入口文件的方法
 * 1，然后node . 就可以直接执行入口文件index.js
 * 这个入口文件是在package.json中定义的
 * 2，在package.json中添加"dev": "node index.js"
 * 然后用命令npm run dev
 */
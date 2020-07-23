//这个配置文件其实就是一个js文件。通过node中的模块操作，向外暴露了一个 配置对象
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    //
    entry: path.join(__dirname,'./src/index.js'),//入口，表示，要使用 webpack 打包哪个文件
    output:{
        path: path.join(__dirname,'./dist'), //指定打包好的文件，输出到哪个目录中去
        filename: 'bundle.js'//这是指定输出的文件的名称
    },
    plugins: [
        new htmlWebpackPlugin({
            // template: path.join(__dirname,'./src/index.html'),
            // filename: 'index.html'
        }),
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ],
    module: {//这个节点，用于配置 所有 第三方模块 加载器
        rules: [//所有第三方模块的 匹配规则
            {test:/\.css$/, use: ['style-loader','css-loader']},//p配置处理.css文件的第三方loader规则
            {test:/\.styl/, use: ['style-loader','css-loader','stylus-loader']},//p配置处理.css文件的第三方loader规则
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=7631&name=[hash:8]-[name].[ext]'},
            // 处理字体加载器
            {test: /\.(ttf|eot|svg|woff|woff2|otf)$/, use: 'url-loader'},//处理字体文件的loader
            {test:/\.js$/,use:'babel-loader',exclude: /node_modules/},
            {test:/\.vue$/,use:'vue-loader'}
        ]
        
    },
    resolve:{
        // alias: {//设置vue被导入时候的包的路径
        //     // 'vue$':'vue/dist/vue.js'
        // }
    }
}
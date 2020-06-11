
const path = require('path')
const webpack = require('webpack')
//导入在内存中生成的html页面的插件
//只要是插件，都一定要放到plugins 节点中去
//这个插件的两个作用：
//1，自动在内存中根据指定页面生成一个内存的页面
//2，自动把打包好的bundle.js追加到页面中去
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports ={
    entry: path.join(__dirname,'./src/main.js'),
    output:{
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    devServer:{//这是配置dev-server 命令参数的第二种形式，相对来说，这种方式麻烦一些
        open: true,//自动打开浏览器
        port: 3000,//设置启动时候的运行端口
        contentBase: 'src',//指定托管的根目录
        hot: true,//启用热启动 的 第一步
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            //创建一个在内存中生成html页面的插件
            template: path.join(__dirname,'./src/index.html'),//指定模版页面
            filename: 'index.html'// 指定内存中生成页面的名称       
        })
    ],
    module:{
        //这个节点，用于配置所有第三方模块加载器
        rules:[
            //所有第三方模块的匹配规则
            {test:/\.css$/,use:[{loader:'style-loader'},
                                {loader:'css-loader',
                                 options:{
                                    modules:{
                                       localIdentName:"[name]_[local]-[hash:5]"
                                    }
                                 }
                                }
                               ]},//通过加?modules为css启用模块化
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=7631&name=[hash:8]-[name].[ext]'},
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},//字体
            {test:/\.jsx?$/,use:'babel-loader',exclude:/node_modules/},//配置babel转换


        ]
    }
}
const  path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports= {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'built.js',
        clean: true,
    },
    mode: 'development',
    module: {
        rules: [
          {
            test: /\.js|jsx$/,
            exclude: /node_modules/,
            use: [
              {loader: 'babel-loader',}
            ]
          }
        ]
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        })
    ],
		devServer: {
			port: 9000,
			hot: true,
		},
    resolve:{
      extensions:['.js','.jsx'],	//表示在import 文件时文件后缀名可以不写
      alias:{
        '@':path.join(__dirname,'./src')	
        //表示设置路径别名这样在import的文件在src下的时候可以直接 @/component/...
      }
    }
}
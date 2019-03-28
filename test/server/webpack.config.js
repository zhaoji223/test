const path = require('path')
// 分离css
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// 清除目录等
const CleanWebpackPlugin = require("clean-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/baidu/index.js',
    // entry: './test.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
		}
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000,
		open: true, // 开启浏览器
		hot: true   // 开启热更新
	},
    module: {
		rules: [{
			test: /\.less$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: [
					'css-loader',
					'less-loader'
				]
			})
		},{
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: ["css-loader", "postcss-loader"],

			})
		}, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    outputPath: 'assets'
                }
            }]
        }, {
			test: /\.(js|es|es6)$/,
			use: [{
                loader: 'babel-loader',
            }],
            
			exclude: /node_modules/
		}, 
		{
			test: /\.vue$/,
			use: [{
				loader: 'vue-loader'
			}]
		}
	]
    },
    plugins: [
        new VueLoaderPlugin(),
        new ExtractTextPlugin('css/styles.css'),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
			template: './index.html'
		})
    ]
};
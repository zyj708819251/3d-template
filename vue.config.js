const path = require('path')
const webpack = require('webpack')


module.exports = {
	lintOnSave: false,
	publicPath: './',
	outputDir: process.env.NODE_ENV=='test'?'test':'template',
	configureWebpack: config => {
		const baseConfig = {
			devtool: 'source-map',
			resolve: { // 配置解析别名
				alias: {
					'@': path.resolve(__dirname, './src'),
					'@api': path.resolve(__dirname, './src/api'), //api路径
					'@utils': path.resolve(__dirname, './src/utils'),
					'@views': path.resolve(__dirname, './src/views'),
					'@com': path.resolve(__dirname, './src/components'),
					'@assets': path.resolve(__dirname, './src/assets')
				}
			}
		}
		if (process.env.NODE_ENV === 'production') {
			return {
				plugins: [
					//jquery
					new webpack.ProvidePlugin({
						$: 'jquery',
						jQuery: 'jquery',
						'windows.jQuery': 'jquery'
					}),
				],
				...baseConfig
			}
		} else {
			return {
				plugins: [
					//jquery
					new webpack.ProvidePlugin({
						$: 'jquery',
						jQuery: 'jquery',
						'windows.jQuery': 'jquery'
					})
				],
				...baseConfig
			}
		}
	},
	css: {
		loaderOptions: {
			sass: {
				prependData: `@import "@/assets/css/scss.scss";`,
			}
		}
	},
	/* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
	productionSourceMap: false,

	chainWebpack(config) {
		config.optimization.minimize(false),
			config.plugin('html')
			.tap(args => {
				args[0].title = "模板";
				return args;
			})
	},
	devServer: {
		open: true,
		host: 'localhost',
		port: 8888,
		// proxy: {
		// 	'/weatherApi': {
		// 		target: 'https://api.help.bj.cn', // target host
		// 		ws: false, // proxy websockets
		// 		changeOrigin: true, // needed for virtual hosted sites
		// 		pathRewrite: {
		// 			'^/weatherApi': ''
		// 		}
		// 	}
		// }
	},
}

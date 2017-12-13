const nodeExternals = require('webpack-node-externals')

module.exports = [{
	entry: __dirname + '/src/app.js',
	output: {
		path: __dirname + '/dist/',
		filename: 'app.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['node6']
			}
		}]
	},
	target: 'node',
	externals: [
		nodeExternals()
	]
}, {
	entry: __dirname + '/src/index.js',
	output: {
		path: __dirname + '/public/',
		filename: 'index.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			}
		}]
	}
}]
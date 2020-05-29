module.exports = {
	entry: './src/index.js',
	module: {
		rules: [
			{
				test   : /\.(js)$/,
				exclude: [ 'babel-loader' ]
			},
			{
				test: /\.(woff|woff2)$/,
				use: {
					loader: 'url-loader'
				}
			},
			{
				test: /\.(jpg|png)$/,
				use: 'url_loader'
			}
		]
	},
	resolve: {
		extensions: ['*', '.js']
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './dist'
	}
}

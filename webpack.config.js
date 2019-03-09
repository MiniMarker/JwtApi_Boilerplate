/**
 * @author Christian Marker
 * @date 2019-03-09
 */

const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	target: 'node',
	externals: [nodeExternals()]
}

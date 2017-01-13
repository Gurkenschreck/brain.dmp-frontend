var path = require('path');
var webpack = require('webpack');

var SRC_DIR = path.resolve(__dirname, 'src');
var DIST_DIR = path.resolve(__dirname, 'dist');
var DIST_PUBLIC_DIR = path.resolve(DIST_DIR, 'public');
var DIST_PUBLIC_STATIC_DIR = path.resolve(DIST_PUBLIC_DIR, 'static');

var mode = process.env.WEBPACK_CONFIG;

module.exports = {
    resolve: {
        // Where webpack should take a look to find modules to 'import x fom './y'
        // And what files to look for (y, y.js, y.jsx)
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js', '.jsx']
    },
	entry: mode === 'build' ? SRC_DIR + '/main.js' : [
        /* TODO add react-hot-loader*/
	    SRC_DIR + '/main.js'
    ],
	output: { 
		path: DIST_PUBLIC_STATIC_DIR,
		filename: 'main.js',
		publicPath: ''
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)?$/,
				loaders: ['react-hot', 'babel-loader'],
				exclude: /node_modules/
			},
            {
                test: /\.css$/,
                loader: 'style!css'
            }
		]
	},
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
	devtool: 'source-map',
	devServer: {
		port: 4711,
		inline: true,
        hot: true,
		publicPath: '/static/',
        contentBase: DIST_PUBLIC_DIR,
        stats: 'errors-only',
		historyApiFallback: {
			index: 'index.html'
		}
	}
};
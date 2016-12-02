var webpack = require('webpack');
var path = require('path');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var env = process.env.WEBPACK_ENV;

var libraryName = 'annotatePDF';
var outputFile, plugins = [];

if(env === 'build') {
	plugins.push(new UglifyJsPlugin({ minimize: true }));
  	outputFile = libraryName + '.min.js';
} else {
	outputFile = libraryName + '.js';
}

var config = {
	entry: __dirname + '/src/annotatePDF.js',
	devtool: 'source-map',
	output: {
	    path: __dirname + '/dist',
	    filename: outputFile,
	    library: 'AnnotatePDF',
	    libraryTarget: 'umd',
	    umdNamedDefine: true
	},
	module: {
	    loaders: [
	      {
	        test: /(\.jsx|\.js)$/,
	        loader: 'babel',
	        exclude: /(node_modules|bower_components)/
	      },
	      {
	        test: /(\.jsx|\.js)$/,
	        loader: "eslint-loader",
	        exclude: /node_modules/
	      }
	    ]
	},
	resolve: {
	    root: path.resolve('./src'),
	    extensions: ['', '.js']
	},
	plugins: plugins,
	devServer: {
		inline: true
	}
};

module.exports = config;
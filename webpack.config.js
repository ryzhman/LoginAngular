var path = require('path');

module.exports = {
    context: __dirname + "/app",
    entry: "./scripts/app.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    module: {
	  	loaders: [
	    	{
		      	test: /\.js$/,
		      	exclude: /(node_modules|bower_components)/,
		      	loader: 'babel-loader',
		      	query: {
		        	presets: ['es2015']
		      	}
	    	},
	    	{
		        test: /\.scss$/,
		        loaders: ["style-loader", "css-loader", "sass-loader"]
		    }
	  	]
	},
	resolve: {
		root: path.join(__dirname, '/app')
	},
    devServer: {
        port: 8080
    }
}
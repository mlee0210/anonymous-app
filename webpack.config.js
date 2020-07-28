var path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
	mode: 'development',
	entry: `${SRC_DIR}/index.jsx`,
	output: {
		path: DIST_DIR,
		filename: 'bundle.js',
	},
	module: {
	  rules: [
	    {
	      test: /\.jsx/,
	      exclude: /node_modules/,
	      use: 'babel-loader'
	    }
	  ]
	},
	resolve: {
      extensions: ['.js', '.jsx'],
    },
}

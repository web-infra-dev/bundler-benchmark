const path = require("path");
const isProd = process.env.NODE_ENV === "production";
const { default: HtmlPlugin } = require('@rspack/plugin-html');
/** @type {import("webpack").Configuration} */
module.exports = {
	mode: isProd ? "production" : "development",
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
	},
	module: {
		
	},
	entry: {
		main: path.resolve(__dirname, "./index.jsx"),
	},
	plugins: [
    new HtmlPlugin({
      title: 'Arco Pro App',
      template: path.join(__dirname, 'index.html'),
    }),
  ],
	devtool: isProd && 'source-map',
	output: {},
	builtins: { progress: {}, },
	stats: {
		warnings: false,
	},
	experiments: {
		incrementalRebuild: true
	},
	module: {},
};

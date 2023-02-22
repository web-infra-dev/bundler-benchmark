const { resolve } = require("path");
const isProd = process.env.NODE_ENV === "production";
/** @type {import("webpack").Configuration} */
module.exports = {
	mode: isProd ? "production" : "development",
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
	},
	entry: {
		main: resolve(__dirname, "./src/index.js"),
	},
	// devtool: false,
	output: {},
	builtins: { treeShaking: false, progress: {}, minify: false },
	stats: {
		warnings: false,
	},
	module: {},
};

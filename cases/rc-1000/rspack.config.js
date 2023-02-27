const { resolve } = require("path");
const isProd = process.env.NODE_ENV === "production";
/** @type {import("webpack").Configuration} */
module.exports = {
	mode: isProd ? "production" : "development",
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
		alias: {
			'@/assets/logo.svg': false,
			'@/components/MessageBox': false,
			'@/context': false,
			'@/locale': false,
			 '@/routes': false,
			'@/store': false,
			'@/utils/useLocale' : false,
			'@/utils/useStorage': false,
			'@arco-design/web-react': false,
			'@arco-design/web-react/icon': false,
			'react': false,
			'react-redux': false,
			'../Settings': false,
			'./IconButton': false
		}
	},
	entry: {
		main: resolve(__dirname, "./src/index.js"),
	},
	devtool: isProd && 'source-map',
	output: {},
	builtins: { treeShaking: isProd, progress: {}, minify: isProd },
	stats: {
		warnings: false,
	},
	module: {},
};

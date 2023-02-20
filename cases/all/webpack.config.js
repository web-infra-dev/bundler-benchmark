const { resolve } = require("path");
/** @type {import("webpack").Configuration} */
module.exports = {
	mode: 'production',
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
		alias: {
			"@internal": resolve(__dirname, "src/rome/internal"),
			// rome: resolve(__dirname, "src/rome/internal/virtual-packages/rome"),
		},
		fallback: {
			"inspector": false,
			"crypto": false,
			"fs": false,
			"os": false,
			"child_process": false,
			"module": false,
			"vm": false,
			"net": false,
			"zlib": false,
			"url": false,
			"stream": false,
			"http": false,
			"https": false,
			"readline": false,
			"child_process": false,
			"tty": false

		}
	},
	output: {
		hashFunction: "xxhash64",
	},
	optimization: {
		sideEffects: true,
		concatenateModules: false
	},
	experiments: {
		cacheUnaffected: true,
	},
	module: {
		rules: [
			// {
			// 	// Match js, jsx, ts & tsx files
			// 	test: /\.[jt]sx?$/,
			// 	loader: "esbuild-loader",
			// 	options: {
			// 		// JavaScript version to compile to
			// 		target: "es2015",
			// 	},
			// },
			{
				test: /\.ts$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'esbuild-loader',
				},
			},
		],
	},
};
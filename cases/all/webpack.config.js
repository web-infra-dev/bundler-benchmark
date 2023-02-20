const { resolve } = require("path");
const isProd = process.env.NODE_ENV === "production";
/** @type {import("webpack").Configuration} */
module.exports = {
	mode: isProd ? "production" : "development",
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
		alias: {
			"@internal": resolve(__dirname, "src/rome/internal"),
			// rome: resolve(__dirname, "src/rome/internal/virtual-packages/rome"),
		},
		fallback: {
			inspector: false,
			crypto: false,
			fs: false,
			os: false,
			child_process: false,
			module: false,
			vm: false,
			net: false,
			zlib: false,
			url: false,
			stream: false,
			http: false,
			https: false,
			readline: false,
			child_process: false,
			tty: false,
		},
	},
	output: {
		hashFunction: "xxhash64",
	},
	optimization: {},
	experiments: {
		cacheUnaffected: true,
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "esbuild-loader",
				},
			},
		],
	},
};

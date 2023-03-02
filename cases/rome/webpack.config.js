const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const prod = process.env.NODE_ENV === "production";
/** @type {import("webpack").Configuration} */
const internalDir = path.resolve(__dirname, "src/rome/internal");
console.log(internalDir)
module.exports = {
	entry: "./src/index.ts",
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
		alias: {
			"@internal": internalDir,
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
	devtool: prod && "source-map",
	optimization: {
		minimize: prod,
		minimizer: [
			new TerserPlugin({
				minify: TerserPlugin.swcMinify,
				// `terserOptions` options will be passed to `swc` (`@swc/core`)
				// Link to options - https://swc.rs/docs/config-js-minify
				terserOptions: {},
			}),
		],
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "swc-loader",
					options: {
						jsc: {
							parser: {
								syntax: "typescript",
							},
						},
					},
				},
			},
		],
	},
};

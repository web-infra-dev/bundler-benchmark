const { resolve } = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const isProd = process.env.NODE_ENV === "production";
const useSwc = process.env.USE_SWC === "1";
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
	devtool: "source-map",
	optimization: {
		minimize: isProd,
		minimizer: [
			new TerserPlugin({
				minify: useSwc ? TerserPlugin.swcMinify : TerserPlugin.terserMinify,
				// `terserOptions` options will be passed to `swc` (`@swc/core`)
				// Link to options - https://swc.rs/docs/config-js-minify
				terserOptions: {},
			}),
		],
	},
	experiments: {
		cacheUnaffected: true,
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: useSwc ? "swc-loader" : "ts-loader",
					options: useSwc
						? {
								jsc: {
									parser: {
										syntax: "typescript",
									},
								},
						  }
						: {
								transpileOnly: true,
						  },
				},
			},
		],
	},
};

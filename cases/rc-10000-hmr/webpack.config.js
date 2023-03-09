const isProd = process.env.NODE_ENV === "production";
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HmrBenchmarkPlugin = require('./plugins/hmr-benchmark-plugin');
module.exports = {
	entry: { main: "./index.jsx" },
	devtool: isProd && "source-map",
  resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
	},
	module: {
		rules: [
			{
				test: /\.[jt]sx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "swc-loader",
						options: {
							jsc: {
								transform: {
									react: {
										development: !isProd,
										refresh: !isProd,
									},
								},
                parser: {
                  jsx: true
                }
							},
						},
					},
				],
			},
		],
	},
	optimization: {
		minimize: isProd,
		minimizer: [
			new TerserPlugin({
				minify: TerserPlugin.swcMinify,
				// `terserOptions` options will be passed to `swc` (`@swc/core`)
				// Link to options - https://swc.rs/docs/config-js-minify
				terserOptions: {},
			}),
		],
	},
	plugins: [
		!isProd && new ReactRefreshWebpackPlugin(),
		!isProd && new HmrBenchmarkPlugin(require('./common.config.js')),
		new HtmlWebpackPlugin({
			template: "./index.html",
		}),
	].filter(Boolean),
};

const isProd = process.env.NODE_ENV === "production";
const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
	output: {
		library: "THREE",
		libraryTarget: "commonjs-module",
	},
	devtool: isProd && "source-map",
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
};

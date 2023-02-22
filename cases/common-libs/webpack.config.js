const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
	devtool: "source-map",
	optimization: {
		minimize: true,
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

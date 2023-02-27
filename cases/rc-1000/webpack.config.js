const isProd = process.env.NODE_ENV === "production";
const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
	devtool: isProd && "source-map",
  resolve: {
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
  module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "esbuild-loader",
				},
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
};

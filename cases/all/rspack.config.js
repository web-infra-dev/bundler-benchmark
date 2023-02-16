const { resolve } = require("path");
/** @type {import("webpack").Configuration} */
module.exports = {
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
		alias: {
			"@internal": resolve(__dirname, "src/rome/internal"),
			// rome: resolve(__dirname, "src/rome/internal/virtual-packages/rome"),
		},
	},
	output: {
		hashFunction: "xxhash64",
	},
	optimization: {
		sideEffects: false,
	},
	module: {
	},
};

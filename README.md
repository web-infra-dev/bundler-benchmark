This repository is based on https://github.com/webpack/benchmark

# Usage
`./scripts/bench-all.sh ${platform}`

**example**
```bash
./scripts/bench-all.sh linux
```

If you only want run specific benchmark in some case, make sure you export `BENCHMARK_PLATFORM` variable

**example**
```bash
export BENCHMARK_PLATFORM=mac
```

# Case
## all

A combination of `atlaskit-editor`, `common-libs`, `common-libs-chunks`, `rome`

## atlaskit-editor
Basic react application with `@atlaskit/editor-core` 
## common-libs
A combination of some widely used libraries in Javascript ecosystem.
## common-libs-chunks
Same as `common-libs`, but using async `import()` syntax to force bundler generate multiple chunks.
## rc-1000
1000 react components (each component have 200 line of code) to simulate real application in development mode and production mode.
## rc-10000-hmr
10000 react components (each component only have basic skeleton, complicated application rerender time may greater than hmr time) to test hot module replacement performance of each devServer of bundler.
## rome

# Configuration
Using swc loader and swc minifier that could maximize performance of each bundler which is same as in `rspack` internally.

**webpack**
```diff 
module.exports = {
	optimization: {
+		minimizer: [
+			new TerserPlugin({
+				minify: TerserPlugin.swcMinify,
+				// `terserOptions` options will be passed to `swc` (`@swc/core`)
+				// Link to options - https://swc.rs/docs/config-js-minify
+				terserOptions: {},
+			}),
+		],
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /(node_modules|bower_components)/,
				use: {
-         loader: "ts-loader",
+         loader: "swc-loader",
+					options: {
+						jsc: {
+							parser: {
+								syntax: "typescript",
+							},
+						},
+					},
				},
			},
		],
	},
};

```

**parcel** 
```diff
+{
+	"extends": "@parcel/config-default",
+	"optimizers": { "*.js": ["@parcel/optimizer-swc"] }
+}
```
We have't replace the transformer because parcel has used swc internally to [speed up them transformation](https://parceljs.org/blog/beta3/)
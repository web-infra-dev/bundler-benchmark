const path = require("path");
const isProd = process.env.NODE_ENV === "production";
const { default: HtmlPlugin } = require("@rspack/plugin-html");
const HmrBenchmarkPlugin = require("./plugins/hmr-benchmark-plugin");
let index = 0;
console.log(isProd)
/** @type {import("@rspack/cli").Configuration} */
module.exports = {
	mode: isProd ? "production" : "development",
	resolve: {
		extensions: [".js",  ".jsx"],
	},
	entry: { main: "./src/index.jsx" },
	builtins: {
		progress: {},
		html: [{ template: path.resolve(__dirname, "./index.html") }],
	},
	stats: {
		warnings: false,
	},
	experiments: {
		incrementalRebuild: true
	},
	plugins: [
// 		new HmrBenchmarkPlugin({
// 			cases: [
// 				{
// 					type: "root",
// 					path: path.resolve(__dirname, "./src/index.jsx"),
// 					generate: () => {
// 						return `
// import React, { useEffect } from "react";
// import ReactDom from "react-dom/client";
// import App1 from "./src/f0";

// function App() {
// 	useEffect(() => {
// 		console.log(Date.now())
// 	});
// 	return (
// 		<div>
// 			<span> ${index++} {Date.now()}</span>
// 			<App1 />
// 		</div>
// 	);
// }

// ReactDom.createRoot(document.getElementById("root")).render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>
// );

		
// 		`;
// 					},
// 				},
// 				{
// 					type: "leaf",
// 					path: path.resolve(__dirname, "src/d0/d0/d0/d0/f0.jsx"),
// 					generate: () => {
// 						return `

//   import React, {useEffect} from 'react'
//   import Icon  from '@icon-park/react/es/all';

  
//   function Navbar({ show }) {
//     useEffect(() => {
//       console.log(Date.now());
//     })
//     return (
//       <div>
//       <span>    ${index++}  </span>
//       {Date.now()}
//       </div>
//     )
//   }
  
//   export default Navbar
  
		
// 		`;
// 					},
// 				},
// 			],
// 		}),
	],
};

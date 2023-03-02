import React, { useEffect } from "react";
import ReactDom from "react-dom/client";
import App1 from "./src/f0";

function App() {
	useEffect(() => {
		console.log(Date.now())
	});
	return (
		<div>
			<span>      i .   {Date.now()}</span>
			<App1 />
		</div>
	);
}

ReactDom.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

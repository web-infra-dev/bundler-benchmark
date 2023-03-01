import React from "react";
import { createRoot } from "react-dom/client";
import App1 from "./src/f0";

function App() {
	return (
		<>
			<App1 />
		</>
	);
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);

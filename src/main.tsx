import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { inject } from "@vercel/analytics";

const rootElement = document.getElementById("root");
if (rootElement) {
	const root = createRoot(rootElement);
	root.render(<App />);
}

// Initialize Vercel Analytics
inject();

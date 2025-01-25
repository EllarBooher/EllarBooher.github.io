import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, HashRouter, Navigate } from "react-router";
import "./Main.css";
import App from "./App.tsx";
import { RendererComponent } from "./webgpu/RendererComponent.tsx";
import { NavigationHeader } from "./NavigateLink.tsx";
import Axe from "./Axe.tsx";

const root = document.getElementById("root")!;

createRoot(root).render(
	<StrictMode>
		<HashRouter>
			{!import.meta.env.PROD && <Axe />}
			<NavigationHeader />
			<Routes>
				<Route index element={<App />} />
				<Route path="webgpu-samples" element={<RendererComponent />} />
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</HashRouter>
	</StrictMode>
);

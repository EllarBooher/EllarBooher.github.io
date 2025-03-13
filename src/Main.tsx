import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, HashRouter, Navigate } from "react-router";
import "./Main.css";
import LandingPage from "./LandingPage.tsx";
import WebGPUSamplePage from "./webgpu/WebGPUSamplePage.tsx";
import Axe from "./Axe.tsx";

const root = document.getElementById("root")!;

createRoot(root).render(
	<StrictMode>
		<HashRouter>
			{!import.meta.env.PROD && <Axe />}
			<Routes>
				<Route index element={<LandingPage />} />
				<Route path="webgpu-samples" element={<WebGPUSamplePage />} />
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</HashRouter>
	</StrictMode>
);

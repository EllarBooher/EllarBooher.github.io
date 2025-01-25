import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, HashRouter, Navigate } from "react-router";
import "./Main.css";
import App from "./App.tsx";
import { RendererComponent } from "./webgpu/RendererComponent.tsx";
import { NavigationHeader } from "./NavigateLink.tsx";

const root = document.getElementById("root")!;

createRoot(root).render(
	<StrictMode>
		<HashRouter>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					height: "100vh",
				}}
			>
				<div>
					<NavigationHeader />
				</div>
				<div style={{ flex: "1" }}>
					<Routes>
						<Route index element={<App />} />
						<Route path="webgpu-samples" element={<RendererComponent />} />
						<Route path="*" element={<Navigate to="/" replace />} />
					</Routes>
				</div>
			</div>
		</HashRouter>
	</StrictMode>
);

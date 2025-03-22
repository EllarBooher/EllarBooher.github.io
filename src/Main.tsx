import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, HashRouter, Navigate } from "react-router";
import "./Main.css";
import LandingPage from "./LandingPage.tsx";
import {
	WebGPUSamplePage,
	WebGPUSampleDirectory,
} from "./webgpu/WebGPUSamplePage.tsx";
import Axe from "./Axe.tsx";
import { samplesByID } from "./webgpu/Samples.ts";

const root = document.getElementById("root")!;

createRoot(root).render(
	<StrictMode>
		<HashRouter>
			{!import.meta.env.PROD && <Axe />}
			<Routes>
				<Route index element={<LandingPage />} />
				<Route path="webgpu">
					<Route index element={<WebGPUSampleDirectory />} />
					{[...samplesByID.keys()].map((sampleID) => {
						return (
							<Route
								key={sampleID}
								path={sampleID}
								element={<WebGPUSamplePage sampleID={sampleID} />}
							/>
						);
					})}
					<Route path="*" element={<Navigate to=".." replace />} />
				</Route>
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</HashRouter>
	</StrictMode>
);

// https://github.com/dequelabs/axe-core-npm/issues/92#issuecomment-1852181096
// Force Axe to update on rerenders

import React from "react";
import ReactDOM from "react-dom";
import { useState, useRef, useEffect } from "react";

const runAxe = () => {
	let axeRunning = false;

	return () => {
		if (!axeRunning) {
			axeRunning = true;

			void import("@axe-core/react").then((axe) =>
				axe.default(React, ReactDOM, 0).then(() => {
					axeRunning = false;
				})
			);
		}
	};
};

const Axe = () => {
	const [mutationCount, setMutationCount] = useState(0); // State variable to track DOM mutations
	const axeRunner = useRef(runAxe());

	useEffect(() => {
		// Create a MutationObserver and observe the entire document for DOM mutations
		const observer = new MutationObserver(() => {
			setMutationCount((count) => count + 1);
		});

		observer.observe(document, { subtree: true, childList: true });

		return () => {
			axeRunner.current = runAxe();
			observer.disconnect();
		};
	}, []); // Empty dependency array to run the effect only once

	useEffect(() => {
		const runAxeFunction = axeRunner.current;
		runAxeFunction(); // Run axe immediately on page load, route changes, and DOM mutations
	}, [mutationCount]);

	return null;
};

export default Axe;

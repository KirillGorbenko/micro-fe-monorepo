import React from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App";

function initMicroFrontend (element: Element) {
    if (!element) {
        throw new Error('root element not found');
    }

    const container = createRoot(element);

    container.render(<App />);
};

export default initMicroFrontend;
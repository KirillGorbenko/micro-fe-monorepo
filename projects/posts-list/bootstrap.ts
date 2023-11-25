import { mountingApp } from "./src/index";

function initMicroFrontend (element: Element) {
    if (!element) {
        throw new Error('root element not found');
    }

    mountingApp(element);
};

export default initMicroFrontend;
import { mountingApp } from "./src";

function initMicroFrontend (element: Element) {
    if (!element) {
        throw new Error('root element not found');
    }

    mountingApp(element);
}

export default initMicroFrontend;
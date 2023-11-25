// @ts-ignore
import { default as initReactMicroFrontend } from "reactApp/ReactAppInit";

// @ts-ignore
import { default as initVueMicroFrontend } from "vueApp/VueAppInit";

const reactApp = document.querySelector("#react-app-1");
const vueApp = document.querySelector("#vue-app-1");

if (reactApp) {
    initReactMicroFrontend(reactApp);
    initVueMicroFrontend(vueApp);
}
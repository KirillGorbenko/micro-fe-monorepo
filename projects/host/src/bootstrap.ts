// @ts-ignore
import( "reactApp/ReactAppInit").then(({default: initMicroFrontend}) => {
    const reactApp = document.querySelector("#react-app-1");

    if (reactApp) {
        initMicroFrontend(reactApp);
    } else {
        throw Error('react app not found, please check this micro frontend')
    }
}).catch((e) => console.log(e))

// @ts-ignore
import("vueApp/VueAppInit").then(({default: initMicroFrontend}) => {
    const vueApp = document.querySelector("#vue-app-1");

    if (vueApp) {
        initMicroFrontend(vueApp);
    } else {
        throw Error('vue app not found, please check this micro frontend')
    }
}).catch((e) => console.log(e))
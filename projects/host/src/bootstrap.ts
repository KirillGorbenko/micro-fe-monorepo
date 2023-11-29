// @ts-ignore
import( "reactApp/ReactAppInit").then(({default: initMicroFrontend}) => {
    const reactAppContainer = document.querySelector("#react-app-1");
    console.log('reactAppContainer', reactAppContainer)

    if (reactAppContainer) {
        initMicroFrontend(reactAppContainer);
    } else {
        throw Error('react appScript not found, please check this micro frontend')
    }
}).catch((e) => console.log(e))

// @ts-ignore
import("vueApp/VueAppInit").then(({default: initMicroFrontend}) => {
    const vueAppContainer = document.querySelector("#vue-app-1");

    if (vueAppContainer) {
        initMicroFrontend(vueAppContainer);
    } else {
        throw Error('vue appScript not found, please check this micro frontend')
    }
}).catch((e) => console.log(e))
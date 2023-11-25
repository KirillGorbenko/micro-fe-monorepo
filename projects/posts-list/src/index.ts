import { createApp } from 'vue'
import App from "./App.vue";

export const mountingApp = (element?: string | Element) => {
    const app = createApp(App);

    app.mount(element || '#app');
};

mountingApp();

import { createApp } from 'vue'
import app from "./app.vue";

export const mountingApp = (element?: string | Element) => {
    const application = createApp(app);

    application.mount(element || '#appLocal');
};

mountingApp();

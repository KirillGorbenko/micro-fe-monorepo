import { createApp } from 'vue';
import app from './app.vue';
import { EventBusFn } from 'event-bus';

interface MountingApp extends Partial<EventBusFn> {
  element?: string | Element;
}

export const mountingApp = ({ element, publish, subscribe }: MountingApp) => {
  const application = createApp(app);

  if (publish && subscribe) {
    application.provide('eventBus', { publish,
      subscribe });
  }

  application.mount(element || '#appLocal');
};

mountingApp({ subscribe: null,
  publish: null });

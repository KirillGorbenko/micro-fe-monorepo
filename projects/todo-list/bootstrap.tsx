import React, { createContext } from 'react';
import { createRoot } from 'react-dom/client';
import App from './src/App';
import { EventBusFn } from 'event-bus';

interface InitMicroFrontend extends EventBusFn {
  element: Element,
}

export const EventBusContext = createContext<EventBusFn>({ publish: null,
  subscribe: null });

function initMicroFrontend ({ subscribe, publish, element }: InitMicroFrontend) {
  if (!element) {
    throw new Error('root element not found');
  }

  const defaultContextValue = { subscribe,
    publish };

  const container = createRoot(element);

  container.render(
    <EventBusContext.Provider value={defaultContextValue}>
      <App />
    </EventBusContext.Provider>
  );
}

export default initMicroFrontend;
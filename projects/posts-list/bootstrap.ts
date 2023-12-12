import { mountingApp } from './src';
import { EventBusFn } from 'event-bus';

interface InitMicroFrontend extends EventBusFn {
  element: Element;
}

function initMicroFrontend ({ element, subscribe = null, publish = null }: InitMicroFrontend) {
  if (!element) {
    throw new Error('root element not found');
  }

  mountingApp({ element,
    subscribe,
    publish });
}

export default initMicroFrontend;
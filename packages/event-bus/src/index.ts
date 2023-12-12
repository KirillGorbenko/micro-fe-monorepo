export interface EventBusFn {
  subscribe: <T = unknown, G = void>(eventType: string, callback: (arg: T) => G) => {
    unsubscribe: () => void;
  },
  publish:  <T = unknown>(eventType: string, arg: T) => void
}

const subscriptions = {};
const getNextUniqueId = getIdGenerator();

function subscribe<T = unknown, G = void>(eventType: string, callback: (arg: T) => G) {
  const id = getNextUniqueId();

  if(!subscriptions[eventType]) {
    subscriptions[eventType] = {};
  }

  subscriptions[eventType][id] = callback;

  return {
    unsubscribe: () => {
      delete subscriptions[eventType][id];
      if(Object.keys(subscriptions[eventType]).length === 0) {
        delete subscriptions[eventType];
      }
    }
  };
}

function publish<T = unknown>(eventType: string, arg: T) {
  if(!subscriptions[eventType]) {
    return;
  }

  Object.keys(subscriptions[eventType]).forEach((key) => subscriptions[eventType][key](arg));
}

function getIdGenerator(): () => number {
  let lastId = 0;

  return function getNextUniqueId(): number {
    lastId += 1;
    return lastId;
  };
}

export const eventBus: EventBusFn = { subscribe,
  publish };


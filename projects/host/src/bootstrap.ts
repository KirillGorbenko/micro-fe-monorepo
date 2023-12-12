import { eventBus } from 'event-bus';

const { subscribe, publish } = eventBus;

export const bootstrap = () => {
  // @ts-ignore Надо разобраться
  import( 'reactApp/ReactAppInit').then(({ default: initMicroFrontend }) => {
    const reactAppContainer = document.querySelector('#react-app-1');
    console.log('reactAppContainer', reactAppContainer);

    if (reactAppContainer) {
      initMicroFrontend({
        element: reactAppContainer,
        subscribe,
        publish
      });
    } else {
      throw Error('react appScript not found, please check this micro frontend');
    }
  }).catch((e) => console.log(e));

  // @ts-ignore Надо разобраться
  import('vueApp/VueAppInit').then(({ default: initMicroFrontend }) => {
    const vueAppContainer = document.querySelector('#vue-app-1');

    if (vueAppContainer) {
      initMicroFrontend({
        element: vueAppContainer,
        subscribe,
        publish
      });
    } else {
      throw Error('vue appScript not found, please check this micro frontend');
    }
  }).catch((e) => console.log(e));
};
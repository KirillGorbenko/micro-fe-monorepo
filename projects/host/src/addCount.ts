import { eventBus } from 'event-bus';

const { publish } = eventBus;

function addCount() {
  const btn = document.querySelector('.button1');
  let counter = 0;

  const handleBtn = () => publish('add_count', counter+=1);

  btn.addEventListener('click', handleBtn);
  window.onclose = () => btn.removeEventListener('click', handleBtn);
}

export default addCount;

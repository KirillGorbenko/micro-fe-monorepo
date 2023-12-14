import React, { FC, useContext, useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TodoList from '@components/TodoList/TodoList';

import styles from './index.module.scss';
import { EventBusContext } from '../bootstrap';

const App: FC = () => {
  const { subscribe } = useContext(EventBusContext);
  const queryClient = new QueryClient();
  const [ counterFromHostApp, setCounterFromHostApp ] = useState(0);

  useEffect(() => {
    // subscribe? на случай если мы запускаем проект без хоста
    const subscriber = subscribe<number>?.('add_count', (count) => setCounterFromHostApp(count));

    return () => subscriber.unsubscribe();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.appWrapper}>
        {counterFromHostApp}
        <h1>React</h1>
        <TodoList />
      </div>
    </QueryClientProvider>
  );
};

export default App;
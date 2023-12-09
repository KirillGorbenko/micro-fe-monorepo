import React, { FC } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TodoList from './components/TodoList/TodoList';

import styles from './index.module.scss';

const App: FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.appWrapper}>
        <h1>React</h1>
        <TodoList />
      </div>
    </QueryClientProvider>
  );
};

export default App;
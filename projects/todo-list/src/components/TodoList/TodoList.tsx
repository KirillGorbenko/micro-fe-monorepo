import React, { FC } from 'react';
import Todo from './Todo';
import { fetchTodos } from '@api/todos';
import { Todo as TodoInterface } from './types';

import { useQuery } from '@tanstack/react-query';
import styles from './index.module.scss';
import Button from '@components/ui/Button';

const TodoList: FC = () => {
  const { data: todos, isLoading, refetch } = useQuery<TodoInterface[]>(
    {
      queryKey: [ 'todos' ],
      queryFn: fetchTodos
    }
  );

  return(
    <ul className={styles.list}>
      <Button onClick={() => refetch()}>refetch</Button>
      {isLoading
        ? 'Loading'
        : todos.map(
          (todo) => <Todo key={todo.id} title={todo.title} completed={todo.completed} id={todo.id} />)
      }
    </ul>
  );
};

export default TodoList;
import React, { FC } from 'react';
import Todo from './Todo';
import { Todo as TodoInterface } from './types';
import { useQuery } from '@tanstack/react-query';
import { fetchTodos } from '../../api';

import styles from './index.module.scss';

const TodoList: FC = () => {
  const { data: todos, isLoading } = useQuery<TodoInterface[]>(
    {
      queryKey: [ 'todos' ],
      queryFn: fetchTodos
    }
  );

  return(
    <ul className={styles.list}>
      {isLoading
        ? 'Loading'
        : todos.map(
          ({ id, title, completed }) => <Todo key={id} title={title} completed={completed} />)
      }
    </ul>
  );
};

export default TodoList;
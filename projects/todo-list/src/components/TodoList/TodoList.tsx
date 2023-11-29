import React, {FC, useEffect, useState} from 'react';
import Todo from './Todo';
import {Todo as TodoInterface} from './types';

import styles from './index.module.scss';

const TodoList: FC = () => {
    const [todos, setTodos] = useState<TodoInterface[]>([])

    const fetchTodos = async () => {
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/todos');
            const parsedResp = await resp.json();

            setTodos(parsedResp);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(fetchTodos, [])

    return(
      <ul className={styles.list}>
          {todos.map(({id, title, completed}) => <Todo key={id} title={title} completed={completed} />)}
      </ul>
    );
};

export default TodoList;
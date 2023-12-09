import React, { FC } from 'react';
import { Todo } from './types';

import styles from './index.module.scss';

const Todo: FC<Partial<Todo>> = ({ title, completed }) => {
  return(
    <li className={styles.listItem}>
      <p>{title}</p>
      <input type="checkbox" checked={completed}/>
    </li>
  );
};

export default Todo;
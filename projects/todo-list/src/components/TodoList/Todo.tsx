import React, { FC, useState } from 'react';
import { Todo } from './types';

import styles from './index.module.scss';

const Todo: FC<Partial<Todo>> = ({ title, completed }) => {
  const [ checked, setChecked ] = useState(completed);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return(
    <li className={styles.listItem}>
      <p>{title}</p>
      <input type="checkbox" checked={checked} onChange={handleChange}/>
    </li>
  );
};

export default Todo;
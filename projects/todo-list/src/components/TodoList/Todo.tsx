import React, { ChangeEvent, FC, useState } from 'react';
import { useMutation } from '@tanstack/react-query';

import { Todo } from './types';
import styles from './index.module.scss';
import { patchTodo } from '@api/todos';

const Todo: FC<Partial<Todo>> = React.memo(({ title, completed, id }) => {
  const [ checked, setChecked ] = useState(completed);

  const mutation = useMutation({
    mutationFn: ({ checked }: { checked: boolean }) => patchTodo(id, { completed: checked }),
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked((prev) => !prev);
    mutation.mutate({ checked: e.target.checked });
  };

  return(
    <li className={styles.listItem}>
      <p>{title}</p>
      <input type="checkbox" checked={checked} onChange={handleChange}/>
    </li>
  );
});

export default Todo;
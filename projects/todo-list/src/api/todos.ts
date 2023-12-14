import { Todo } from '@components/TodoList/types';

export const fetchTodos = async () => {
  try {
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos');

    return await resp.json();
  } catch (error) {
    console.log(error);
  }
};

export const patchTodo = async (id: number, body: Partial<Todo>) => {
  try {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    return await resp.json();
  } catch (error) {
    console.log(error);
  }
};
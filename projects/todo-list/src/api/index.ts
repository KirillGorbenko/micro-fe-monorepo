export const fetchTodos = async () => {
  try {
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos');

    return await resp.json();
  } catch (error) {
    console.log(error);
  }
};
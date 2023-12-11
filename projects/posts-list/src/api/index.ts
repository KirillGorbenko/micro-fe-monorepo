import { Post } from '../types';

const API = 'https://jsonplaceholder.typicode.com/posts';

export const getAllPosts = async (): Promise<Post[]> => {
  try {
    const resp = await fetch(API);
    return await resp.json();
  } catch(error) {
    console.log(error);
  }
};

export const addNewPost = async (newPost: Post) => {
  try {
    const response = await fetch(API, {
      method: 'POST',
      body: JSON.stringify(newPost),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const removePost = async (postId: number) => {
  try {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'DELETE',
    });
  } catch (error) {
    console.log(error);
  }
};
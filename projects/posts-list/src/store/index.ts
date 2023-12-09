import { reactive } from 'vue';
import { Post } from '../types';
import { addNewPost, removePost } from '../api';

interface Store {
    posts: Post[];
}

const store = {
  debug: true,
  state: reactive<Store>({
    posts: []
  }),
  setPosts(newValue: Post[]) {
    if (this.debug) {
      console.log('setPosts вызван с', newValue)
    }

    this.state.posts.splice(0, this.state.posts.length);
    this.state.posts.push(...newValue);
  },
  async addNewPost(post: Post) {
    if (this.debug) {
      console.log('addNewPost вызван с', post)
    }

    const newPost = await addNewPost(post);
    this.state.posts.push(newPost);
  },
  async removePost(postId: number, index: number) {
    try {
      await removePost(postId);

      this.state.posts.splice(index, 1);
    } catch (error) {
      console.log(error)
    }
  }
}

export default store;
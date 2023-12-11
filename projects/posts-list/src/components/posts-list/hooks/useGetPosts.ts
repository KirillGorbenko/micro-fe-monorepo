import { onMounted } from 'vue';
import { getAllPosts } from '@api';
import store from '@store';

export default function useGetPosts() {
  const updatePosts = async () => {
    try {
      const postsFromApi = await getAllPosts();

      console.log('postsFromApi', postsFromApi);

      store.setPosts(postsFromApi);
    } catch (error) {
      console.log(error);
    }
  };

  onMounted(updatePosts);

  return {
    updatePosts
  };
}
import { onMounted } from 'vue';
import { getAllPosts } from '../../../api';
import store from '../../../store';

export default function useGetPosts() {
  const updatePosts = async () => {
    const postsFromApi = await getAllPosts();

    store.setPosts(postsFromApi);
  };

  onMounted(updatePosts);

  return {
    updatePosts
  };
}
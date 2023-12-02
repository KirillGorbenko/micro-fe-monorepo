import {onMounted, ref} from "vue";
import { getAllPosts } from "../../../api";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default function useGetPosts() {
    const posts = ref<Post[]>([]);

    const updatePosts = async () => {
        posts.value = await getAllPosts();
    };

    onMounted(updatePosts);

    return {
        posts,
        updatePosts
    };
};
<template>
  <button @click="updatePosts">Update posts</button>
  <posts-adder />
  <ul class="list">
    <posts-list-item v-for="post in posts" :title='post.title' />
  </ul>
</template>

<script lang="ts">
import PostsListItem from "./posts-list-item.vue";
import Button from "./button.vue";
import PostsAdder from "./posts-adder.vue";
import { getAllPosts } from "../api";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Data {
  posts: Post[];
}

export default {
  components: {
    PostsAdder,
    PostsListItem,
    Button
  },
  data(): Data {
    return {
      posts: [],
    }
  },
  methods: {
    async updatePosts(): Promise<void> {
      this.posts = await getAllPosts();
    }
  },
  async mounted() {
    await this.updatePosts();
  }
}
</script>

<style lang="scss">
.list {
  background: aqua;
  width: 90%;
  height: 90%;
  overflow: auto;
}
</style>
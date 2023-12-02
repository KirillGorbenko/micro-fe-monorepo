<template>
  <button @click="updatePosts">Update posts</button>
  <posts-adder />
  <ul class="list">
    <posts-list-item v-for="post in posts" :title='post.title' />
  </ul>
</template>

<script lang="ts">
import PostsListItem from "../posts-list-item.vue";
import Button from "../button.vue";
import PostsAdder from "../posts-adder.vue";
import useGetPosts from "./hooks/useGetPosts";

export default {
  components: {
    PostsAdder,
    PostsListItem,
    Button
  },
  setup() {
    const { posts, updatePosts } = useGetPosts();

    return {
      posts,
      updatePosts
    }
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
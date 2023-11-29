<template>
  <button @click="updatePosts">Update posts</button>
  <ul class="list">
    <li v-for="post in posts">{{ post.title }}</li>
  </ul>
</template>

<script lang="ts">
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
  data(): Data {
    return {
      posts: [],
    }
  },
  methods: {
    async updatePosts(): Promise<void> {
      try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
        this.posts = await resp.json();
      } catch(error) {
        console.log(error)
      }
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
<template>
  <custom-button
    theme='blue'
    @click='updatePosts'
  >
    Update posts
  </custom-button>
  <posts-adder />
  <ul class='list'>
    <posts-list-item
      v-for='(post, index) in posts'
      :id='post.id'
      :key='post.id'
      :title='post.title'
      :index='index'
    />
  </ul>
</template>

<script lang="ts">
import PostsListItem from '../posts-list-item.vue';
import CustomButton from '../custom-button.vue';
import PostsAdder from '../posts-adder.vue';
import useGetPosts from './hooks/useGetPosts';
import store from '../../store';

export default {
  components: {
    PostsAdder,
    PostsListItem,
    CustomButton
  },
  setup() {
    const { updatePosts } = useGetPosts();

    return { updatePosts }
  },
  data() {
    return {
      posts: store.state.posts
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
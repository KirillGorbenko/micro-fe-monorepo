<script lang="ts">
import { defineComponent } from 'vue';
import PostsListItem from '@components/posts-list-item.vue';
import CustomButton from '@components/custom-button.vue';
import PostsAdder from '@components/posts-adder.vue';
import useGetPosts from './hooks/useGetPosts';
import store from '@store';

export default defineComponent({
  components: {
    PostsAdder,
    PostsListItem,
    CustomButton
  },
  setup() {
    const { updatePosts } = useGetPosts();

    return { updatePosts };
  },
  data() {
    return {
      posts: store.state.posts
    };
  }
});
</script>

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

<style lang="scss" scoped>
  @import '../../index';

  .list {
    background: $main_color_2;
    width: 90%;
    height: 90%;
    padding: 2%;
    border-radius: 20px;
    overflow: auto;
    color: $text_color_white;
  }
</style>
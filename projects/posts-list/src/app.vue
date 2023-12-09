<script lang="ts">
import postsList from './components/posts-list/posts-list.vue';

export default {
  components: {
    postsList
  }
}
</script>

<template>
  <div class='appWrapper'>
    <h1 class='title'>
      Vue js
    </h1>
    <posts-list />
  </div>
</template>

<style lang="scss">
  @import 'index.scss';

  body {
    padding: 0;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
  }

  .title {
    color: $main_color_2;
    font-weight: bold;
  }

  .appWrapper {
    width: 50vw;
    height: 50vh;
    background: aquamarine;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
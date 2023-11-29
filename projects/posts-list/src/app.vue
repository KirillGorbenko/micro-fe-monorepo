<template>
  <div
    class="wrapper"
  >
    <h1>Vue js</h1>
    <posts-list />
  </div>
</template>

<style lang="scss" scoped>
  .wrapper {
    width: 50vw;
    height: 50vh;
    background: aquamarine;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>

<script lang="ts">
import postsList from './components/posts-list.vue';
export default {
  components: {
    postsList
  }
}
</script>
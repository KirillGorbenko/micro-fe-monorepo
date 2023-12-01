<script lang="ts">
import Button from "./button.vue";

export default {
  components: {
    Button
  }
}
</script>

<template>
  <div class="postsAdderWrapper">
    <input type="text" />
    <button>Добавить</button>
  </div>
</template>

<style scoped lang="scss">
  .postsAdderWrapper {
    width: 90%;
    display: flex;
    gap: 10px;
  }

  input {
    width: 80%;
  }
</style>
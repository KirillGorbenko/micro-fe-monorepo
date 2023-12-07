<template>
  <li class='listItem'>
    <p class='text'>
      {{ title }}
    </p>
    <custom-button
      theme='green'
      @click='store.removePost(id, index)'
    >
      remove
    </custom-button>
  </li>
</template>

<script lang="ts">
import store from '../store';
import CustomButton from './custom-button.vue';

export default {
  components: {
    CustomButton
  },
  props: {
    title: String,
    index: Number,
    id: Number
  },
  computed: {
    store() {
      return store;
    }
  }
}
</script>

<style lang="scss" scoped>
  .listItem {
    display: flex;
    justify-content: space-between;
  }
</style>
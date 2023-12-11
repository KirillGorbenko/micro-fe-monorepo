<script lang="ts">
import { defineComponent } from 'vue';
import store from '@store';
import CustomButton from '@components/custom-button.vue';

export default defineComponent({
  components: {
    CustomButton
  },
  props: {
    title: { type: String,
      default: '' },
    index: { type: Number,
      default: 0 },
    id: { type: Number,
      default: 1 }
  },
  computed: {
    store() {
      return store;
    }
  },
  methods: {
    firstCharToUpperCase(title: string) {
      return title[0]?.toUpperCase() + title.substring(1, title.length);
    }
  }
});
</script>

<template>
  <li class='listItem'>
    <p class='text'>
      {{ firstCharToUpperCase(title) }}
    </p>
    <custom-button
      theme='green'
      @click='store.removePost(id, index)'
    >
      remove
    </custom-button>
  </li>
</template>

<style lang="scss" scoped>
  .listItem {
    display: flex;
    justify-content: space-between;
  }
</style>
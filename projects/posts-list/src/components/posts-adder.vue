<script lang="ts">
import CustomButton from './custom-button.vue';
import store from '../store';

export default {
  components: {
    CustomButton
  },
  data() {
    return {
      title: null,
      description: null
    }
  },
  computed: {
    store() {
      return store
    }
  },
  methods: {
    onButtonClick: function() {
      store.addNewPost({
        title: this.title,
        body: this.description,
        id: Math.random(),
        userId: 1
      });
    }
  }
}
</script>

<template>
  <div class='postsAdderWrapper'>
    <input
      v-model='title'
      type='text'
    >
    <input
      v-model='description'
      type='text'
    >
    <custom-button
      theme='blue'
      @click='onButtonClick'
    >
      Add
    </custom-button>
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
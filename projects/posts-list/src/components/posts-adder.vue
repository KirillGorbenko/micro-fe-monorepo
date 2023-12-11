<script lang="ts">
import CustomButton from '@components/custom-button.vue';
import store from '@store';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    CustomButton
  },
  data() {
    return {
      title: null,
      description: null
    };
  },
  computed: {
    store() {
      return store;
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
});
</script>

<template>
  <div class='postsAdderWrapper'>
    <div class='customInput'>
      <label class='label'>Title</label>
      <input
        v-model='title'
        class='input'
        type='text'
      >
    </div>
    <div class='customInput'>
      <label class='label'>Description</label>
      <input
        v-model='description'
        class='input'
        type='text'
      >
    </div>
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
    margin-top: 10px;
    justify-content: center;
    align-items: flex-end;
  }

  .customInput {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 5px;

    .label {
      font-size: 16px;
      font-weight: bolder;
    }

    .input {
      width: 90%;
      border-radius: 10px;
      height: 25px;
    }
  }
</style>
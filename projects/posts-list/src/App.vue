<template>
  <div id="app">
    <button @click="decrement">-</button>
    <p>{{ counter }}</p>
    <button @click="increment">+</button>
  </div>
</template>

<script lang="ts">
  interface State {
    counter: number;
  }
  export default {
    data: function(): State {
      return { counter: 0 }
    },
    methods: {
      increment: function() {
        this.counter += 1;
      },
      decrement: function() {
        this.counter -= 1;
      },
    }
  }
</script>

<style lang="scss" scoped>
  button {
    background: aquamarine;
  }
</style>
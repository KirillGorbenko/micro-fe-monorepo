<template>
  <li>{{ title }}</li>
</template>

<script lang="ts">
interface Props {
  title: string;
}

export default {
  props: {
    title: String
  }
}
</script>

<style lang="scss">

</style>
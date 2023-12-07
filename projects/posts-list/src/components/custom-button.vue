<script lang="ts">
import { defineComponent, PropType } from 'vue';

type Theme = 'green' | 'blue';

export default defineComponent({
  props: {
    theme: {
      type: String as PropType<Theme>,
      default: 'green'
    },
  },
  computed: {
    isGreenTheme() {
      return this.theme === 'green';
    },
    isBlueTheme() {
      return this.theme === 'blue';
    }
  }
});
</script>

<template>
  <button :class='{ button: true, green: isGreenTheme, blue: isBlueTheme }'>
    <slot />
  </button>
</template>

<style lang="scss" scoped>
  @import '../index';

  .button {
    height: 30px;
    background: $button_color;
    border: 0;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    font-weight: bold;
  }

  .green {
    &:hover {
      transition: .5s;
      background: $main_color;
    }
  }

  .blue {
    &:hover {
      transition: .5s;
      background: $main_color_2;
    }
  }
</style>
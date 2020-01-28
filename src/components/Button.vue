<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    btn: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../configs/_config";
@import "../configs/_buttons";
</style>

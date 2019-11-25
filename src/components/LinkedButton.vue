<template>
  <a v-if="btn.link" target="_blank" v-bind:href="btn.link" rel="noopener noreferrer" class="btn" v-bind:class="btn.class">
    <slot></slot>
  </a>
  <div v-else class="btn" v-bind:class="btn.class">
    <slot></slot>
  </div>
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

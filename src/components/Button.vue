<template>
  <button class="btn" @click="handleClick(btn.component)">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    btn: {
      type: Object
    }
  },
  data() {
    return {};
  },
  methods: {
    handleClick(component) {
      this.$emit("componentFromChildren", component);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../configs/_config";
@import "../configs/_buttons";
</style>

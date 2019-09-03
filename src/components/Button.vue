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
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../configs/_config";

.btn {
  display: inline-block;
  width: 280px;
  color: $background-color;
  background: $text-basic-color;
  text-align: center;
  font-size: 24px;
  padding: 10px 0;
  border: 0.5px solid $background-color;
  cursor: pointer;

  &--primary {
  }

  &--secondary {
  }
}
</style>

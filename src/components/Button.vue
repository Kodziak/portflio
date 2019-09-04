<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    btn: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../configs/_config";

.btn {
  display: inline-block;
  width: 280px;
  height: 50px;
  text-align: center;
  font-size: 24px;
  padding: 10px 0;
  cursor: pointer;

  &--primary {
    color: $background-color;
    background: $text-basic-color;
    border: 0.5px solid $background-color;
  }

  &--secondary {
    color: $text-basic-color;
    border: 0.5px solid $text-description-color;
  }
}
</style>

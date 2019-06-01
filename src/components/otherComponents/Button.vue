<template>
  <a
    target="_blank"
    v-bind:href="btn.link"
    rel="noopener noreferrer"
    class="btn"
    v-bind:class="btn.class"
  >
    <slot></slot>
  </a>
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
@import "../config";

.btn {
  display: inline-block;
  width: 180px;
  line-height: 42px;
  color: $header-color;
  font-size: 20px;
  text-align: center;
  vertical-align: middle;
  border-radius: 3px;
  cursor: pointer;
}

.btn--resume {
  background: $shadow-color-opacity;

  @include mediaSmartfon {
    margin: auto;
    display: flex;
    justify-content: center;
  }
}

.btn--code {
  margin: 0 10px;
  background: $background-color;

  @include mediaSmartfon {
    margin: 0;
  }
}

.btn--view {
  margin: 0 10px;
  color: $shadow-color;
  border: 1px solid $shadow-color;

  @include mediaSmartfon {
    margin: 0;
  }
}
</style>

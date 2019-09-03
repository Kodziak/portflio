<template>
  <a target="_blank" v-bind:href="btn.link" rel="noopener noreferrer" class="btn" v-bind:class="btn.class">
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
  padding: 8px 48px;
  color: $text-color;
  font-size: 24px;
  border-radius: 2px;
  cursor: pointer;
  transition: 0.4s;
}

.btn--resume {
  background: $shadow-color-opacity;

  &:hover {
    background: $shadow-color;
    color: $header-color;
  }

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

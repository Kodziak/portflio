<template>
  <label class="tag bor-rad-3">{{ tag }}</label>
</template>

<script>
export default {
  props: {
    tag: {
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../configs/_config";

.tag {
  font-size: 11px;
  display: inline-block;
  background: $black-lighten;
  color: $white-darken;
  padding: 3px 5px;
  margin: 0 5px;
  white-space: nowrap;

  &:first-child {
    margin: 0 5px 0 0;
  }

  &:last-child {
    margin: 0 0 0 5px;
  }

  @include mediaSmartfon {
    font-size: 9px;
  }
}
</style>

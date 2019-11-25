<template>
  <div class="tag bor-rad-3">{{ tag }}</div>
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
  font-size: 12px;
  display: inline-block;
  background: lighten($background-color, 10);
  color: $text-basic-color;
  padding: 3px 5px;
  margin: 0 5px;
  border-radius: 2px;
  text-transform: uppercase;

  @include mediaSmartfon {
    font-size: 9px;
  }
}
</style>

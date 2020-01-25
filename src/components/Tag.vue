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
  font-size: 10px;
  display: inline-block;
  background: lighten($black, 2);
  color: darken($white, 20);
  padding: 3px 5px;
  margin: 0 5px;
  border-radius: 2px;
  text-transform: uppercase;

  @include mediaSmartfon {
    font-size: 9px;
  }
}
</style>

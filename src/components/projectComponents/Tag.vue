<template>
  <div class="tag bor-rad-3">{{ tag }}</div>
</template>

<script>
export default {
  props: {
    tag: {
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../config";

.tag {
  font-size: 12px;
  display: inline-block;
  background: $shadow-color-opacity;
  color: white;
  padding: 3px 10px;
  box-shadow: 0px 1px 2px lightgrey;
  margin: 0 5px;
}
</style>

<template>
  <h3><slot /></h3>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
@import "../../configs/_config";

h3 {
  position: relative;
  display: inline-block;

  &:after {
    @include halfShadow;
  }
}
</style>

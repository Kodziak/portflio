<template>
  <h3><slot /></h3>
</template>

<script>
export default {
  name: 'HeaderSmall',
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

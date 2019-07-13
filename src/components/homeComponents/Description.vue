<template>
  <h3>{{ content }}</h3>
</template>

<script>
export default {
  props: {
    content: {
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../config";

h3 {
  position: relative;
  width: calc(100% - 30px);
  left: 30px;
  margin: 16px 0;

  @include mediaSmartfon {
    margin: 8px 0;
  }
}

h3::before {
  position: absolute;
  content: url("../../assets/Lines.svg");
  top: -5px;
  left: -30px;

  @include mediaSmartfon {
    top: 0;
  }
}
</style>

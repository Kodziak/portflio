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
h3 {
  position: relative;
  left: 30px;
}

h3::before {
  position: absolute;
  content: url("../../assets/Lines.svg");
  width: 100%;
  left: -30px;
}
</style>

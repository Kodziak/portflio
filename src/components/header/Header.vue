<template>
  <div class="view--header">
    <div class="header--bg">
      <h2
        class="glitch"
        :data-text="header.title"
      >
        {{ header.title }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../configs/_config";
@import "../../configs/_glitch";
</style>

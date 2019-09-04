<template>
  <div class="whoami wrapper--grid">
    <h2>WHO</h2>
  </div>
</template>

<script>
// import Button from "../components/Button";

export default {
  name: "WhoAmI",
  components: {
    // Button
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import "../configs/_config";

.whoami {
  h2 {
    grid-column: 3 / 5;
    grid-row: 2 / 2;
    position: relative;
  }

  h2:after {
    content: "AM I";
    position: absolute;
    width: 100%;
    font-weight: 400;
    top: 32px;
    right: -175px;
  }
}
</style>

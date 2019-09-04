<template>
  <div class="home">
    <h1>oh, <br />hello there.</h1>
    <Button :class="btn.type">{{ btn.name }}</Button>
  </div>
</template>

<script>
import Button from "../components/Button";

export default {
  name: "Home",
  components: {
    Button
  },
  data() {
    return {
      btn: {
        name: "GET TO KNOW ME",
        type: "btn--primary"
      }
    };
  }
};
</script>

<style lang="scss">
@import "../configs/_config";

.home {
  grid-column-start: 7;
  grid-column-end: 13;
  grid-row-start: 6;
  justify-self: end;

  @include mediaSmartfon {
    grid-column-start: 1;
  }

  h1 {
    margin: 0 0 40px 0;
  }
}
</style>

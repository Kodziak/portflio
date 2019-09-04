<template>
  <div class="home wrapper--grid">
    <div class="home__content">
      <h1>oh, <br />hello there.</h1>
      <Button :class="btn.type">{{ btn.name }}</Button>
    </div>
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
  &__content {
    grid-column: 7 / 13;
    grid-row: 6 / 12;
    justify-self: end;

    h1 {
      margin-bottom: 40px;
    }
  }
}
</style>

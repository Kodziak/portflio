<template>
  <div class="home wrapper--grid">
    <div class="home__content">
      <h1>oh, <br />hello there.</h1>
      <Button :btn="btn" :class="btn.type" @componentFromChildren="handleComponent">{{ btn.name }}</Button>
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
        type: "btn--primary",
        component: "WhoAmI"
      }
    };
  },
  methods: {
    handleComponent(component) {
      this.$emit("componentFromChildren", component);
    }
  }
};
</script>

<style lang="scss">
@import "../configs/_config";

.home {
  &__content {
    grid-column: 3 / 13;
    grid-row: 6 / 12;
    justify-self: end;

    @include mediaSmartfon {
    }

    h1 {
      margin-bottom: 40px;
    }
  }
}
</style>

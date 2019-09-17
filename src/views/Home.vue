<template>
  <div class="home wrapper--grid wrapper--background">
    <div class="home__content">
      <div class="box"></div>
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
  &.wrapper--background {
    &:before {
      height: 435px;
      grid-row: 5 / 14;
    }

    &:after {
      bottom: calc(100% - 27% - 435px);
      z-index: -1;
    }

    @include mediaSmartfon {
      &:before {
        height: 250px;
        grid-row-start: 7;
      }

      &:after {
        bottom: calc(100% - 43% - 250px);
      }
    }
  }

  &__content {
    grid-column: 3 / 13;
    grid-row-start: 5;
    justify-self: end;
    position: relative;
    display: flex;
    flex-direction: column;

    @include mediaSmartfon {
      grid-row-start: 7;
      justify-self: center;
    }

    .box {
      position: absolute;
      left: -30px;
      min-height: 460px;
      max-height: 500px;
      right: calc(50% + 30px);
      background: $text-basic-color;

      @include mediaSmartfon {
        min-height: 280px;
        right: calc(50% + 15px);
      }
    }

    h1 {
      margin-bottom: 30px;
      mix-blend-mode: difference;
    }

    .btn {
      mix-blend-mode: difference;
      align-self: center;
      margin-right: 60px;

      @include mediaSmartfon {
        margin-right: 0;
      }

      &:after {
        opacity: 0;
      }
    }
  }
}
</style>

<template>
  <div class="home wrapper--grid">
    <div class="home__content">
      <div class="triangle"></div>
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
  &.wrapper--grid {
    &:before {
      height: 435px;
      top: 35%;
    }

    &:after {
      bottom: calc(100% - 35% - 435px);
    }
  }

  &__content {
    grid-column: 3 / 13;
    grid-row: 6 / 12;
    justify-self: end;
    position: relative;

    display: flex;
    flex-direction: column;

    .triangle {
      position: absolute;
      left: -30px;
      width: 0;
      height: 0;
      border-bottom: 425px solid $text-basic-color;
      border-right: 425px solid transparent;
    }

    @include mediaSmartfon {
      grid-row: 8 / 13;
      justify-self: center;
      align-self: end;
    }

    h1 {
      // margin-bottom: 40px;
      mix-blend-mode: difference;
    }

    .btn {
      mix-blend-mode: difference;
      margin-left: 180px;

      &:after {
        opacity: 0;
      }
    }
  }
}
</style>

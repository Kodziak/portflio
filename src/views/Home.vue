<template>
  <div class="home view">
    <div class="home__content">
      <div class="home__description wrapper--background">
        <div class="box"></div>
        <h1>oh, <br />hello there.</h1>
        <Button :btn="btn" :class="btn.type" @componentFromChildren="handleComponent">{{ btn.name }}</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../components/Button.vue';

export default {
  name: 'Home',
  components: {
    Button,
  },
  data() {
    return {
      btn: {
        name: 'GET TO KNOW ME',
        type: 'btn--primary',
        component: 'WhoAmI',
      },
    };
  },
  methods: {
    handleComponent(component) {
      this.$emit('componentFromChildren', component);
    },
  },
};
</script>

<style lang="scss">
@import "../configs/_config";

.home {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  &__content {
    align-self: center;

    .wrapper--background {
      &:before {
        height: calc(100% + 50px);
        top: 0;
        right: -10vw;
        left: auto;
      }

      &:after {
        right: -10vw;
        top: calc(100% + 40px);
        left: auto;
      }
    }

    .home__description {
      display: flex;
      flex-direction: column;
      position: relative;

      @include mediaSmartfon {
        justify-self: center;
      }

      .box {
        position: absolute;
        top: 0;
        left: -50px;
        bottom: -50px;
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

      button {
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
}
</style>

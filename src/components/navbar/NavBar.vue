<template>
  <header>
    <div class="menu view view--menu">
      <router-link
        v-for="btn in btns"
        :key="btn.id"
        class="menu-btn"
        :to="btn.target"
        @click.native="changeMenuState(btn.component)"
      >
        {{ btn.name }}
      </router-link>
    </div>
  </header>
</template>

<script>
import utils from '../../utils';

export default {
  name: 'NavBar',
  props: {
    btns: {
      type: Array,
      required: true,
    },
  },

  methods: {
    changeMenuState(component) {
      utils.setMenuState(component);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../configs/_config";

header {
  background: $black-darken;

  .menu {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    @include mediaSmartfon {
      justify-content: center;
    }

    &-btn {
      position: relative;
      padding: 20px 5px 10px;
      margin: 0 20px;
      cursor: pointer;

      &:hover {
        color: $white-darken;
      }

      @include mediaSmartfon {
        margin: 0;
      }
    }

    &-btn:last-child {
      margin: 0 0 0 20px;

      @include mediaSmartfon {
        margin: 0;
      }
    }

    &-btn--active:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      top: 0;
      right: 0;
      background: $white;
    }

    &-btn--active {
      color: $white;
      font-weight: bold;
    }
  }
}
</style>

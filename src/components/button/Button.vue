<template>
  <a
    v-if="btn.link"
    target="_blank"
    :href="btn.link"
    rel="noopener noreferrer"
    class="btn"
    :class="btn.class"
  >
    <slot />
  </a>
  <router-link
    v-else-if="btn.router"
    :class="btn.class"
    :to="btn.target"
    :click="btn.click"
  >
    <slot />
  </router-link>
  <button
    v-else
    class="btn"
    :class="btn.class"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    btn: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "../../configs/_config";

.btn {
  display: inline-block;
  padding: 12px 35px;
  text-align: center;
  cursor: pointer;
  transition: all 0.4s ease;
  position: relative;
  border: 0.5px solid $white-darken;

  &:hover {
    box-shadow: -5px 5px $purple;
  }

  @include mediaSmartfon {
    min-width: 190px;
    padding: 10px 20px;
  }

  &--primary {
    color: $black;
    background: $white-lighten;

    &.btn--inactive {
      background-color: #cccccc;
    }
  }

  &--secondary {
    color: $white;

    &.btn--inactive {
      background-color: none;
    }
  }

  &--inactive {
    color: #666666;
    cursor: not-allowed;
  }
}

</style>

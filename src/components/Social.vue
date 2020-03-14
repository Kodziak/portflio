<template>
  <a
    :target="/^http/.test(social.link) ? '_blank' : '_self'"
    :href="social.link"
    rel="noopener noreferrer"
    :title="social.title"
  >
    <img
      :src="getImage(social.icon)"
      :alt="social.icon"
    >
    <span>{{ social.title }}</span>
  </a>
</template>

<script>
export default {
  props: {
    social: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getImage(icon) {
      const icons = require.context('@/assets/icons/', false, /\.svg$/);
      return icons(`./${icon}.svg`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../configs/_config";
a {
  height: 60px;
  width: 60px;
  margin: 0 10px;
  border-radius: 15%;
  transition: background 0.5s ease-in-out, display 0.5s ease-in-out;

  @include mediaSmartfon {
    height: 35px;
    width: 40px;
  }

  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    display: none;
    margin-top: 5px;
    font-size: 12px;
  }

  img {
    mix-blend-mode: difference;
  }
}

a:hover {
  transition: background 0.5s ease-in-out, display 0.5s ease-in-out;

  @include mediaDesktop {
    span {
      display: inline;
    }
  }

}

.icon {
  &-mail:hover {
    background: $red-gmail;
  }

  &-linkedin:hover {
    background: $blue-linekdin;
  }

  &-twitter:hover {
    background: $blue-twitter;
  }

  &-github:hover {
    background: $grey-github;
  }
}
</style>

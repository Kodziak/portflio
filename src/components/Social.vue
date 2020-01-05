<template>
  <a
    :target="/^http/.test(social.link) ? '_blank' : '_self'"
    :href="social.link"
    rel="noopener noreferrer"
    :title="social.title"
  >
    <img :src="getImage(social.icon)" :alt="social.icon" />
    <span>{{social.title}}</span>
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
      const icons = require.context('@/assets/', false, /\.svg$/);
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
}

a:hover {
  transition: background 0.3s ease-in-out;
  background: rgba(102, 153, 255, 0.5);

  span {
    display: inline;
  }
}

.active {
  // &-mail {
  //   background: red;
  // }

  // &-linkedin {
  //   background: blue;
  // }

  // &-twitter {
  //   background: rgba(102, 153, 255, 0.5);
  // }

  // &-github {
  //   background: grey;
  // }
}
</style>

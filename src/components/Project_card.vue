<template>
  <div class="project-card">
    <img class="project-card__image" v-bind:src="project.img" />
    <div class="project-card__background"></div>
    <div class="project-card__description">
      <h4>{{ project.title }}</h4>
      <p>{{ project.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    project: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss">
@import "../configs/_config";

.project-card {
  position: relative;
  width: 450px;
  height: 260px;
  z-index: 0;
  overflow: hidden;
  transition: all 0.5s ease, z-index 0s step-end;

  &:hover {
    z-index: 1;
    transform: scale(1.6);
    will-change: scale, z-index, opacity, filter;

    .project-card__image {
      filter: blur(3px);
    }

    .project-card__background {
      opacity: 1;
    }

    .project-card__description {
      opacity: 1;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
  }

  &__background {
    position: absolute;
    width: 100%;
    height: 50%;
    bottom: 0;
    opacity: 0;
    background: linear-gradient(rgba(255, 0, 0, 0), $background-color);
  }

  &__description {
    position: absolute;
    width: calc(100% - 60px);
    left: 30px;
    bottom: 30px;
    opacity: 0;
  }
}
</style>

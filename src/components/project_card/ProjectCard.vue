<template>
  <div class="project-card">
    <vue-header-small>
      {{ project.title }}
    </vue-header-small>

    <img
      class="project-card__image"
      :src="project.img"
    >

    <p>{{ project.description }}</p>

    <div class="project-card__tags">
      <vue-tag
        v-for="(tag, index) in project.tags"
        :key="index"
        :tag="tag"
      />
    </div>

    <div class="project-card__buttons">
      <vue-button
        v-for="(btn, index) in project.btns"
        :key="index"
        :btn="btn"
        :class="btn.type"
        class="project-btn"
      >
        {{ btn.name }}
      </vue-button>
    </div>
  </div>
</template>

<script>
import VueHeaderSmall from '../header/HeaderSmall.vue';
import VueTag from './Tag.vue';
import VueButton from '../button/Button.vue';

export default {
  name: 'ProjectCard',
  components: {
    VueHeaderSmall,
    VueTag,
    VueButton,
  },
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../configs/_config";

.project-card {
  // background: $black-darken;
  width: 430px;

  @include mediaSmartfon {
    width: 85%;
    margin: 20px 0;
  }

  &__image {
    width: 430px;
    height: auto;
    margin: 5px 0 10px;

    @include mediaSmartfon {
    width: 100%;
  }
  }

    .project-card__tags {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin: 5px 0 10px;
    }

    .project-card__buttons {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        margin-bottom: 10px;

        @include mediaSmartfon {
          justify-content: center;
          margin-bottom: 0;

          .project-btn {
            margin: 0 5px;
            min-width: 0;
          }
        }

        .project-btn {
          padding: 4px 20px;
        }

        .project-btn:last-child {
          margin: 0 10px;
        }
    }

}
</style>

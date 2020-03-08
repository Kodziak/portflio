<template>
  <div class="project-card">
    <img
      class="project-card__image"
      :src="project.img"
    >
    <div class="project-card__description">
      <vue-header-small class="project-card__header">
        {{ project.title }}
      </vue-header-small>
      <p>{{ project.description }}</p>
      <div class="project-card__tags">
        <vue-tag
          v-for="(tag, index) in project.tags"
          :key="index"
          :tag="tag"
        />
      </div>
      <div class="project-card__buttons">
        <linked-button
          v-for="(btn, index) in project.btns"
          :key="index"
          :btn="btn"
          :class="btn.type"
        >
          {{ btn.name }}
        </linked-button>
      </div>
    </div>
  </div>
</template>

<script>
import VueHeaderSmall from '../header/HeaderSmall.vue';
import VueTag from './Tag.vue';
import LinkedButton from '../button/Button.vue';

export default {
  components: {
    VueHeaderSmall,
    VueTag,
    LinkedButton,
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
  width: 450px;
  background: $black-darken;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  margin: 0 10px;
  transition: box-shadow ease-in-out 0.5s;
  box-shadow: -25px -25px 0px $purple;

  &:hover {
    transition: box-shadow ease-in-out 0.5s;

  }

  @include mediaSmartfon {
    width: 100%;
    margin: 0;
  }

  &__image {
    width: 450px;
    height: auto;

    @include mediaSmartfon {
      width: 100%;
    }
  }

  &__description {
    margin: auto 20px auto 30px;
    padding: 20px 15px;
    z-index: 2;

    @include mediaSmartfon {
      margin: 20px;
      padding: 5px;
    }

    p {
      margin: 30px 0 0 0;

      @include mediaSmartfon {
        margin-top: 20px;
        text-align: center;
      }
    }

    .project-card__tags {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: 10px;
      margin-bottom: 30px;

      @include mediaSmartfon {
        justify-content: center;
        margin-bottom: 20px;
      }
    }

    .project-card__buttons {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        margin-bottom: 10px;

        @include mediaSmartfon {
          justify-content: center;
          margin-bottom: 0;

          .btn {
            margin: 0 5px;
            min-width: 0;
          }
        }

        .btn {
          padding: 7px 30px;
        }

        .btn:last-child {
          margin: 0 10px;
        }
    }
  }
}
</style>

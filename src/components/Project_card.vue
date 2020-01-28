<template>
  <div class="project-card">
    <img class="project-card__image" v-bind:src="project.img" />
    <div class="project-card__description">
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      <div class="project-card__tags">
        <Tag v-for="(tag, index) in project.tags" :key="index" :tag="tag" />
      </div>
      <div class="project-card__buttons">
        <LinkedButton v-for="(btn, index) in project.btns" :key="index" :btn="btn" :class="btn.type">
          {{ btn.name }}
        </LinkedButton>
      </div>
    </div>
  </div>
</template>

<script>
import Tag from './Tag.vue';
import LinkedButton from './LinkedButton.vue';

export default {
  components: {
    Tag,
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

<style lang="scss">
@import "../configs/_config";

.project-card {
  width: 600px;
  height: 100%;
  background: darken($black, 5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  box-shadow: 10px 10px 20px darken($black, 2), -10px -10px 20px lighten($black, 2);
  margin: 0 10px;

  @include mediaSmartfon {
    width: 100%;
    margin: 0;
  }

  &__image {
    width: 100%;
    height: 100%;

    @include mediaSmartfon {
      display: none;
    }
  }

  &__description {
    margin: auto 20px auto 30px;
    padding: 15px;
    z-index: 2;

    @include mediaSmartfon {
      margin: 20px;
      padding: 5px;
    }

    h3 {
      position: relative;
      display: inline-block;

      &:after {
        @include halfShadow;
      }
    }

    p {
      margin: 30px 0 0 0;

      @include mediaSmartfon {
        margin-top: 20px;
        text-align: center;
      }
    }

    .project-card__tags {
      margin-top: 10px;
      margin-bottom: 30px;

      @include mediaSmartfon {
        display: flex;
        flex-direction: row;
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

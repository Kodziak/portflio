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
  width: 100%;
  background: $black;
  display: flex;
  flex-direction: row;
  justify-content: center;

  img {
    @include mediaSmartfon {
      display: none;
    }
  }

  @include mediaDesktop {
    &:nth-child(even) {
      flex-direction: row-reverse;

      .project-card__description {
        text-align: end;
        margin-left: 0;
        margin-right: 30px;

        p {
          margin-left: auto;
        }
      }
    }
  }

  &__description {
    margin: auto 0 auto 30px;

    @include mediaSmartfon {
      width: 280px;
      margin: 30px 0 0 0;
    }

    h3 {
      position: relative;
      display: inline-block;

      &:after {
        @include halfShadow;
      }
    }

    p {
      margin: 40px 0 0 0;

      @include mediaSmartfon {
        text-align: justify;
      }
    }

    .project-card__tags {
      margin-top: 10px;
      margin-bottom: 50px;
    }

    .project-card__buttons {
      @include mediaSmartfon {
        justify-content: center;

        .btn {
          margin: 5px !important;

          &:first-child {
            margin-bottom: 25px !important;
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="project-card wrapper--background">
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
import Tag from "./Tag";
import LinkedButton from "./LinkedButton";

export default {
  components: {
    Tag,
    LinkedButton
  },
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
  width: 100%;
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

  &.wrapper--background {
    position: relative;

    &:before {
      height: 90%;
      top: 20%;
      left: 0;
      right: 0;
    }

    &:after {
      top: 110%;
      left: 0;
      right: 0;
    }

    @include mediaSmartfon {
      &:before {
      }

      &:after {
      }
    }
  }

  &__description {
    margin-top: 130px;
    margin-left: 30px;

    @include mediaSmartfon {
      width: 280px;
      margin: 80px 0 0 0;
    }

    h3 {
      position: relative;
      display: inline-block;
      margin-bottom: 20px;

      &:after {
        @include halfShadow;
      }
    }

    p {
      max-width: 450px;
      line-height: 27px;

      @include mediaSmartfon {
        font-size: 13px;
        line-height: 20px;
        text-align: justify;
      }
    }

    .project-card__tags {
      margin-top: 10px;
      margin-bottom: 30px;
    }

    .project-card__buttons {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      @include mediaSmartfon {
        justify-content: center;

        .btn {
          margin: 5px !important;

          &:first-child {
            margin-bottom: 25px !important;
          }
        }
      }

      .btn:first-child {
        margin: 5px 30px 5px 0;
      }

      .btn:last-child {
        margin: 5px 5px 5px 0;
      }
    }
  }
}
</style>

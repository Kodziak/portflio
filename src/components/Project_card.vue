<template>
  <div class="project-card">
    <div class="line-horizontal"></div>
    <div class="line-vertical"></div>
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
  background: darken($black, 5);
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  box-shadow: 5px 3px 3px darken($black, 5);

  .line-horizontal::before {
    content: "";
    position: absolute;
    left: 0;
    top: -10px;
    width: calc(100% + 10px);
    height: 2px;
    background: $white;
  }

  .line-horizontal::after {
    content: "";
    position: absolute;
    left: 0;
    top: -20px;
    width: calc(100% + 20px);
    height: 2px;
    background: $white;
  }

  .line-vertical::before {
    content: "";
    position: absolute;
    right: -10px;
    top: -10px;
    height: calc(60% + 10px);
    width: 2px;
    background: $white;
  }

  .line-vertical::after {
    content: "";
    position: absolute;
    right: -20px;
    top: -20px;
    height: calc(80% + 20px);
    width: 2px;
    background: $white;
  }

  &__image {
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
    padding: 10px;
    z-index: 2;

    @include mediaSmartfon {
      width: 280px;
      margin: 10px 15px;
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
      margin: 40px 0 0 0;

      @include mediaSmartfon {
        text-align: center;
      }
    }

    .project-card__tags {
      margin-top: 10px;
      margin-bottom: 45px;

      @include mediaSmartfon {
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
    }

    .project-card__buttons {
      .btn {
        margin: 5px 20px 5px 0;
      }

      @include mediaSmartfon {
        display: flex;
        flex-direction: column;
        align-items: center;

        .btn {
          margin: 5px !important;

          &:first-child {
            margin-bottom: 15px !important;
          }
        }
      }
    }
  }
}
</style>

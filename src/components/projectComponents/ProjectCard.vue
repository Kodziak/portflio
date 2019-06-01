<template>
  <div class="project-card">
    <img class="project-card__img bor-rad-3" v-bind:src="project.img">
    <div class="project-card__desc project-card--grid bor-rad-3">
      <h2>{{ project.title }}</h2>
      <div class="project-card__tags">
        <Tag v-for="(tag, index) in project.tags" :key="index" :tag="tag"/>
      </div>
      <p>{{ project.description }}</p>
      <div class="project-card__btn--row">
        <Button v-for="(btn, index) in project.btns" :key="index" :btn="btn">{{ btn.name }}</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Tag from "./Tag";
import Button from "../otherComponents/Button";

export default {
  components: {
    Tag,
    Button
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
@import "../config";

.project-card {
  width: $card-width;
  margin: 50px 0;

  @include mediaSmartfon {
    width: $card-width-mobile;
  }

  &__desc {
    background: white;
    padding: 20px;
    position: relative;
    box-shadow: -5px 7px 2px $shadow-color-opacity, 1px -1px 2px #141414;
  }

  &--grid {
    display: grid;
    grid-template-columns: 215px auto;
    grid-template-rows: repeat(auto-fit, minmax(10%, 50%));

    @include mediaSmartfon {
      display: flex;
      flex-direction: column;
    }
  }

  &__img {
    width: $card-width;
    background: #33333326;
    position: relative;
    margin-bottom: -10px;

    box-shadow: -5px 7px 2px $shadow-color-opacity, 1px -1px 2px #141414;

    @include mediaSmartfon {
      width: $card-width-mobile;
    }
  }

  &__tags {
    grid-column: 2;
    grid-row-start: 1;
    place-self: center;
  }

  h2 {
    color: $background-color;
    font-size: 22px;
    font-weight: bold;
    text-align: center;

    grid-column: 1;
    grid-row: 1 / 4;
    place-self: center;

    @include mediaSmartfon {
      margin-bottom: 10px;
    }
  }

  p {
    color: $background-color;
    font-size: 16px;
    text-align: center;
    padding: 30px 0;

    grid-column: 2;
    grid-row-start: 2;

    @include mediaSmartfon {
      padding: 10px 0;
    }
  }

  .project-card__btn--row {
    grid-column-start: 2;
    grid-row-start: 3;
    place-self: center;

    @include mediaSmartfon {
      display: flex;
      flex-direction: column;
      align-content: center;
    }
  }
}
</style>

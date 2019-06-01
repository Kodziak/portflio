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
        <Button v-for="(btn, index) in project.btns" :key="index" :btn="btn">code</Button>
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
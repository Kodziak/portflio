<template>
  <div class="project-card">
    <img class="project-card__img bor-rad-3" v-bind:src="project.img">
    <div class="project-card__desc project-card--grid bor-rad-3">
      <h2>{{ project.title }}</h2>
      <div class="project-card__tags">
        <div
          v-for="(tag, index) in project.tags"
          :key="index"
          class="project-card__tag bor-rad-3"
        >{{ tag }}</div>
      </div>
      <p>{{ project.description }}</p>
      <div class="project-card__btn--row">
        <a
          v-if="project.demo"
          target="_blank"
          v-bind:href="project.demo"
          rel="noopener noreferrer"
          class="btn btn--view"
        >demo</a>
        <a
          v-if="project.github"
          target="_blank"
          v-bind:href="project.github"
          rel="noopener noreferrer"
          class="btn btn--code"
        >code</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  }
};
</script>
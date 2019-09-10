<template>
  <div class="project-card">
    <img class="project-card__image" v-bind:src="project.img" />
    <div class="project-card__description">
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      <LinkedButton v-for="(btn, index) in project.btns" :key="index" :btn="btn" :class="btn.type">{{ btn.name }}</LinkedButton>
    </div>
  </div>
</template>

<script>
import LinkedButton from "./LinkedButton";

export default {
  components: {
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
  .btn {
    // transform: scale(0.7); //NEED FIX PROBLEM WITH Z-INDEX
  }
}
</style>

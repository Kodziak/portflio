<template>
  <div class="project">
    <div>
      <h1>Projects</h1>
    </div>
    <!-- <div class="project--flex" v-if="projects.length"> -->
    <!-- <ProjectCard v-for="(project, index) in projects" :key="index" :project="project" /> -->
    <!-- </div> -->
    <!-- <p v-else>Nothing to show...</p> -->
  </div>
</template>

<script>
export default {
  name: "Projects",
  components: {},
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import "../configs/_config";

.project {
  margin: 0 10%;

  @include mediaSmartfon {
    margin: 0 10% 0;
    height: 100%;
  }
}

.project--flex {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

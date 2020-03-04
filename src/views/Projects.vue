<template>
  <div class="project view view--page">
    <div class="view--header">
      <div class="header--bg">
        <h2 class="glitch" data-text="PROJECTS">PROJECTS</h2>
      </div>
    </div>
    <div class="project__card--wrapper view--content">
      <div class  ="project__cards ">
        <ProjectCard v-for="(project, index) in projects" :key="index" :project="project" />
      </div>
    </div>
  </div>
</template>

<script>
import { projects } from '../data/index';
import ProjectCard from '../components/Project_card.vue';
import utils from '../utils';

export default {
  name: 'Projects',
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects,
    };
  },
  mounted() {
    utils.setMenuState('Projects');
  },
};
</script>

<style lang="scss">
@import "../configs/_config";
@import "../configs/_glitch";

.project__card--wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.project {
  &__cards {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    @include mediaSmartfon {
      flex-direction: column;
      align-content: space-between;

      .project-card {
        margin: 15px 0;
      }
    }
  }
}
</style>

<template>
  <div class="project view view--page">
    <vue-header :header="header" />
    <div class="project__card--wrapper view--content">
      <div class="project__cards">
        <project-card
          v-for="(project, index) in projects"
          :key="index"
          :project="project"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { projects } from '../data/index';

import VueHeader from '../components/header/Header.vue';
import ProjectCard from '../components/project_card/ProjectCard.vue';
import utils from '../utils';

// TODO: Make color to props for everything in project (like a small header now)

export default {
  name: 'Projects',
  components: {
    VueHeader,
    ProjectCard,
  },
  data() {
    return {
      projects,
      header: {
        title: 'PROJECTS',
      },
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

        &__header:after {
          background: #4780A3;
        }
      }
    }

    .project-card:last-child {
      box-shadow: -25px -25px 0px #4780A3;

        .project-card__header:after {
          background: #4780A3;
        }

        .btn:hover {
          box-shadow: -5px 5px #4780A3;
        }
      }
  }
}
</style>

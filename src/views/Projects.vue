<template>
  <div class="project wrapper--grid">
    <h2>PROJECTS</h2>
    <div class="project__cards" v-if="projects.length">
      <ProjectCard v-for="(project, index) in projects" :key="index" :project="project" />
    </div>
    <p v-else>Nothing to show...</p>
  </div>
</template>

<script>
import ProjectCard from "../components/Project_card";

export default {
  name: "Projects",
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: [
        {
          title: "PORTFOLIO",
          description: "Personal website to introduce myself. My look over the design and developing.",
          img: "./portfolio.jpg"
        },
        {
          title: "DAILY NEWS",
          description: "Information website where user/client can follow the newest information from QA world.",
          img: "./cat.jpg"
        },
        {
          title: "BLOG",
          description:
            "A personal blog. The whole idea comes to share experience learning automation tests scripts and programming.",
          img: "./blog.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "../configs/_config";

.project {
  h2 {
    grid-column: 3 / 5;
    grid-row: 2 / 2;
  }

  &__cards {
    grid-column: 3 / 13;
    grid-row: 4 / 12;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
  }
}
</style>

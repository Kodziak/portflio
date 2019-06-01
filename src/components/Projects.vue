<template>
  <div class="project">
    <div>
      <h1>Projects</h1>
    </div>
    <div class="project--flex" v-if="projects.length">
      <ProjectCard v-for="(project, index) in projects" :key="index" :project="project"/>
    </div>
    <p v-else>Nothing to show...</p>
  </div>
</template>

<script>
import ProjectCard from "./projectComponents/ProjectCard.vue";

export default {
  name: "Projects",
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: [
        {
          title: "Portfolio",
          description:
            "Personal website to introduce myself. My look over the design and developing.",
          tags: ["javascript", "vue", "scss"],
          img: "./portfolio.jpg",
          btns: [
            {
              name: "code",
              link: "https://github.com/Kodziak/portfolio",
              class: "btn--code"
            },
            {
              name: "view",
              link: "https://ppaczoski.pl",
              class: "btn--view"
            }
          ]
        },
        {
          title: "Daily News",
          description:
            "Information website where user/client can follow the newest information from QA world.",
          tags: ["nodejs", "vue", "mongodb"],
          img: "./cat.jpg",
          btns: [
            {
              name: "code",
              link: "https://github.com/Kodziak/daily-news",
              class: "btn--code"
            }
          ]
        },
        {
          title: "Blog",
          description:
            "A personal blog. The whole idea comes to share experience learning automation tests scripts and programming.",
          tags: ["11ty", "javascript", "scss"],
          img: "./blog.jpg",
          btns: [
            {
              name: "code",
              link: "https://github.com/Kodziak/blog",
              class: "btn--code"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "config";

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
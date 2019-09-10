<template>
  <div class="project">
    <div class="wrapper--grid">
      <div class="project__header">
        <h2>PROJECTS</h2>
      </div>
    </div>
    <div class="project__cards">
      <ProjectCard v-for="(project, index) in projects" :key="index" :project="project" />
    </div>
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
          img: "./portfolio.png",
          btns: [
            {
              name: "VIEW RESUME",
              type: "btn--secondary",
              link: "./CV_Przemyslaw_Paczoski.pdf"
            },
            {
              name: "CHECK MY WORK",
              type: "btn--primary",
              component: "Projects"
            }
          ]
        },
        {
          title: "DAILY NEWS",
          description: "Information website where user/client can follow the newest information from QA world.",
          img: "./cat.jpg",
          btns: [
            {
              name: "VIEW RESUME",
              type: "btn--secondary",
              link: "./CV_Przemyslaw_Paczoski.pdf"
            },
            {
              name: "CHECK MY WORK",
              type: "btn--primary",
              component: "Projects"
            }
          ]
        },
        {
          title: "BLOG",
          description:
            "A personal blog. The whole idea comes to share experience learning automation tests scripts and programming.",
          img: "./blog.jpg",
          btns: [
            {
              name: "VIEW RESUME",
              type: "btn--secondary",
              link: "./CV_Przemyslaw_Paczoski.pdf"
            },
            {
              name: "CHECK MY WORK",
              type: "btn--primary",
              component: "Projects"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "../configs/_config";

.project {
  .wrapper--grid {
    height: 9vh;
    grid-template-rows: 20% 70%;
    grid-row-gap: 10%;

    @include mediaSmartfon {
      grid-column-start: 1;
    }
  }

  &__header {
    grid-column: 3 / 5;
    grid-row: 2 / 2;
  }

  h2 {
    position: relative;
    display: inline-block;

    &:after {
      @include shadow;
    }
  }

  &__cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    .project-card {
      margin: 100px 0;
    }
  }
}
</style>

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
import ProjectCard from "./ProjectCard.vue";

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
          github: "https://github.com/Kodziak/portfolio",
          demo: "https://ppaczoski.pl"
        },
        {
          title: "Daily News",
          description:
            "Information website where user/client can follow the newest information from QA world.",
          tags: ["nodejs", "vue", "mongodb"],
          img: "./cat.jpg",
          github: "https://github.com/Kodziak/daily-news"
        },
        {
          title: "Blog",
          description:
            "A personal blog. The whole idea comes to share experience learning automation tests scripts and programming.",
          tags: ["11ty", "javascript", "scss"],
          img: "./blog.jpg",
          github: "https://github.com/Kodziak/blog"
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

    .btn--view,
    .btn--code {
      width: 180px;
      margin: 0 10px;

      @include mediaSmartfon {
        margin: 0;

        &:nth-child(2) {
          margin: 20px 0 0 0;
        }
      }
    }

    .btn--code {
      background: $background-color;
    }

    .btn--view {
      color: $shadow-color;
      border: 1px solid $shadow-color;
    }
  }
}
</style>
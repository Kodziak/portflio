<template>
  <div class="project">
    <div class="flex-1"></div>
    <div>
      <h1>Projects</h1>
    </div>
    <div class="project--flex">
      <div v-for="(project, index) in projects" :key="index" class="project-card">
        <img class="project-card__img" v-bind:src="project.img">
        <div class="project-card--bg project-card--flex">
          <h2>{{ project.title }}</h2>
          <p>{{ project.description }}</p>
          <div class="project-card__tags">
            <div
              v-for="(tag, index) in project.tags"
              :key="index"
              class="project-card__tag"
            >{{ tag }}</div>
          </div>
          <div class="btn--row">
            <a
              v-if="project.demo"
              target="_blank"
              v-bind:href="project.demo"
              rel="noopener noreferrer"
              class="btn btn--view"
            >
              <img src="../assets/eye.svg">
            </a>
            <a
              v-if="project.github"
              target="_blank"
              v-bind:href="project.github"
              rel="noopener noreferrer"
              class="btn btn--code"
            >
              <img src="../assets/code.svg">
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-1"></div>
  </div>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {
          title: "Daily News",
          description:
            "This portfolio. Simple, SPA, light and made for introduce myself.",
          tags: ["html", "javascript", "scss"],
          img: "./Logo_mini.svg",
          github: "http://localhost:8080",
          demo: "http://localhost:8080"
        },
        {
          title: "Daily News",
          description:
            "This portfolio. Simple, SPA, light and made for introduce myself.",
          tags: ["html", "javascript", "scss"],
          img: "../public/Logo_mini.svg",
          github: "http://localhost:8080",
          demo: "http://localhost:8080"
        },
        {
          title: "Daily News",
          description:
            "This portfolio. Simple, SPA, light and made for introduce myself.",
          tags: ["html", "javascript", "scss"],
          img: "../assets/Logo_mini.svg",
          github: "http://localhost:8080",
          demo: "http://localhost:8080"
        },
        {
          title: "Daily News",
          description:
            "This portfolio. Simple, SPA, light and made for introduce myself.",
          tags: ["html", "javascript", "scss"],
          img: "../assets/Logo_mini.svg",
          github: "http://localhost:8080",
          demo: "http://localhost:8080"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "config";

.project {
  height: 85vh;
  margin: 0 10%;
  display: flex;
  flex-direction: column;

  @include mediaSmartfon {
    margin: 0 10% 0;
    height: 100%;
  }
}

.project--flex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  @include mediaSmartfon {
    justify-content: center;
  }

  .project-card {
    width: 300px;
    margin: 50px 0 20px;
    color: $background-color;

    @include mediaSmartfon {
      margin: 35px 0 15px;
    }

    &--bg {
      background: white;
      border-radius: 5px;
      position: relative;
      box-shadow: -5px 7px 2px $shadow-color-opacity;
    }

    &--flex {
      display: flex;
      flex-direction: column;
    }

    &__tags {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
      width: 200px;
      align-self: center;
      margin: 20px 0 0 0;

      .project-card__tag {
        font-size: 12px;
        display: inline-block;
        padding: 2px 10px;
        border-radius: 3px;
        box-shadow: 0px 1px 2px grey;
      }
    }

    h2 {
      color: $background-color;
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      margin: 20px 0;
    }

    p {
      color: $background-color;
      font-size: 15px;
      text-align: center;
    }

    &__img {
      height: 250px;
      width: 300px;
      border-radius: 5px;
      background: #33333326;
      position: relative;
      z-index: 0;
      margin-bottom: -10px;

      box-shadow: -5px 7px 2px $shadow-color-opacity;
    }

    .btn--row {
      flex-direction: row;
      align-self: center;
      margin: 10px 0 20px;
    }

    .btn--view,
    .btn--code {
      height: 25px;
      width: 115px;
      margin: 0 7.5px;

      img {
        height: 25px;
        width: 25px;
      }
    }

    .btn--code {
      background: $background-color;
    }

    .btn--view {
      border: 1px solid $shadow-color;
    }
  }
}
</style>
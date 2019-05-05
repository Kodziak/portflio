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
          title: "Portfolio",
          description:
            "Personal website to introduce myself. My look over the design and developing.",
          tags: ["vue", "scss"],
          img: "./portfolio.jpg",
          github: "https://github.com/Kodziak/portfolio",
          demo: "https://ppaczoski.pl"
        },
        {
          title: "Daily News",
          description:
            "Information website where user/client can follow the newest information from QA world.",
          tags: ["nodejs", "vue", "mongodb"],
          img: "./portfolio.jpg",
          github: "https://github.com/Kodziak/daily-news"
        },
        {
          title: "Blog",
          description:
            "A personal blog. The whole idea comes to share experience learning automation tests scripts and programming.",
          tags: ["11ty", "javascript", "scss"],
          img: "./portfolio.jpg",
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
    width: 400px;
    margin: 50px 20px 20px;
    color: $background-color;

    @include mediaSmartfon {
      width: 300px;
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
      align-self: center;
      margin: 20px 0 0 0;

      .project-card__tag {
        font-size: 12px;
        display: inline-block;
        padding: 2px 10px;
        margin: 0 5px;
        border-radius: 3px;
        box-shadow: 0px 1px 2px lightgrey;
      }
    }

    h2 {
      color: $background-color;
      font-size: 22px;
      font-weight: bold;
      text-align: center;
      margin: 20px 0 10px;
    }

    p {
      color: $background-color;
      font-size: 15px;
      text-align: center;
      margin: 0 10px;
    }

    &__img {
      width: 400px;
      border-radius: 5px;
      background: #33333326;
      position: relative;
      margin-bottom: -10px;

      box-shadow: -5px 7px 2px $shadow-color-opacity;

      @include mediaSmartfon {
        width: 300px;
      }
    }

    .btn--row {
      display: inline-block;
      align-self: center;
      margin: 10px 0 20px;

      @include mediaSmartfon {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }

    .btn--view,
    .btn--code {
      height: 30px;
      width: 155px;
      margin: 0 10px;

      @include mediaSmartfon {
        margin: 5px auto;
      }

      img {
        height: 30px;
        width: 30px;
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
<template>
  <div class="project">
    <div class="flex-1"></div>
    <div>
      <h1>Projects</h1>
    </div>
    <div class="project--flex">
      <div v-for="(project, index) in projects" :key="index" class="project__card">
        <img src="../assets/Logo_mini.svg">
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <p>Stack: {{ project.stack }}</p>
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
          stack: "JavaScript, Vue, Sass"
        },
        {
          title: "Blog",
          description:
            "This portfolio. Simple, SPA, light and made for introduce myself.",
          stack: "JavaScript, Vue, Sass"
        },
        {
          title: "Daily News",
          description:
            "This portfolio. Simple, SPA, light and made for introduce myself.",
          stack: "JavaScript, Vue, Sass"
        },
        {
          title: "Blog",
          description:
            "This portfolio. Simple, SPA, light and made for introduce myself.",
          stack: "JavaScript, Vue, Sass"
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
  justify-content: space-between;

  @include mediaSmartfon {
    justify-content: center;
  }

  .project__card {
    width: 220px;
    margin: 50px 0 20px;
    position: relative;

    @include mediaSmartfon {
      margin: 35px 0 15px;
    }

    h2 {
      color: $header-color;
      margin-top: 15px;
      font-size: 20px;
      font-weight: bold;
      position: relative;
    }

    h2:after {
      @include shadow;
    }

    p {
      margin: 10px 0;
    }

    img {
      height: 210px;
      width: 210px;
      border-radius: 20px;
      background: #33333326;

      box-shadow: -3px 7px 2px $shadow-color-opacity;
    }
  }
}
</style>
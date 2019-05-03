<template>
  <div class="projects">
    <div class="flex-1"></div>
    <div class="project_header">
      <h1>Project's</h1>
    </div>
    <div class="project_flex">
      <div v-for="(item, index) in items" :key="index" class="project_card">
        <img src="../assets/Logo_mini.svg">
        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
        <p>Stack: {{ item.stack }}</p>
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
      items: [
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

// TODO: v-for instead of hard coded project_card. Info in params.
</script>

<style lang="scss">
@import "config";

h1,
h2,
p {
  color: #cecece;
  margin: 0;
  padding: 0;
}

.projects {
  height: 85vh;
  margin: 0 7%;
  display: flex;
  flex-direction: column;

  @include mediaSmartfon {
    margin: 0 10% 0;
    height: 100%;
  }
}

.project_flex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  @include mediaSmartfon {
    justify-content: center;
  }

  .project_card {
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
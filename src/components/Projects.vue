<template>
  <div class="container">
    <div class="flex-1"></div>
    <div class="project_header">
      <h1>Project's</h1>
    </div>
    <div class="project_flex">
      <div class="project_card">
        <img src="../assets/Logo_mini.svg">
        <h2>Portfolio</h2>
        <p>This portfolio. Simple, SPA, light and made for introduce myself.</p>
        <p>Stack: JavaScript, Vue, Sass</p>
      </div>
      <div class="project_card">
        <img src="../assets/Logo_mini.svg">
        <h2>Blog</h2>
        <p>This portfolio. Simple, SPA, light and made for introduce myself.</p>
        <p>Stack: 11ty, JavaScript, Sass</p>
      </div>
      <div class="project_card">
        <img src="../assets/Logo_mini.svg">
        <h2>Daily News</h2>
        <p>This portfolio. Simple, SPA, light and made for introduce myself.</p>
        <p>Stack: JavaScript, Vue, Axios, Cheerio, MongoDB</p>
      </div>
      <div class="project_card">
        <img src="../assets/Logo_mini.svg">
        <h2>Portfolio</h2>
        <p>This portfolio. Simple, SPA, light and made for introduce myself.</p>
        <p>Stack: JavaScript, Vue, Sass</p>
      </div>
    </div>
    <div class="flex-1"></div>
  </div>
</template>

<script>
export default {
  name: "Projects"
};
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

.container {
  height: 85vh;
  margin: 0 7%;
  display: flex;
  flex-direction: column;

  @include mediaSmartfon {
    margin: 0 10% 0;
    height: 100%;
  }
}

h2 {
  color: $header-color;
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
      margin-top: 15px;
      font-size: 20px;
      font-weight: bold;
      position: relative;
    }

    h2:after {
      position: absolute;
      content: "";
      width: 103%;
      height: 50%;
      top: 0;
      left: 0;
      box-shadow: -3px 13px 0px 0px $shadow-color-opacity;
      z-index: -1;
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
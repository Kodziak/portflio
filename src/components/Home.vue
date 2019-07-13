<template>
  <div class="home">
    <div class="flex-1"></div>
    <div class="home--grid">
      <div class="home__header">
        <h1>Hi, I'm Przemek.</h1>
        <br />
        <h2>I'm a Test Developer and Scrum Master.</h2>
      </div>
      <div class="home__content">
        <Description v-for="(content, index) in desc" :key="index" :content="content" />
        <Button :btn="btn">{{ btn.name }}</Button>
      </div>
    </div>
    <div class="flex-1"></div>
  </div>
</template>

<script>
import Link from "./homeComponents/Link.vue";
import Description from "./homeComponents/Description.vue";
import Button from "./otherComponents/Button";

export default {
  name: "Home",
  components: {
    Link,
    Description,
    Button
  },
  data() {
    return {
      desc: [
        "Based in Poland.",
        "I write in JavaScript and Go.",
        "I write tests in Puppeteer with Jest.",
        "I'm a Security and Scrum enthusiast.",
        "Sometimes I design in Adobe Xd."
      ],
      btn: {
        name: "resume",
        link: "./CV_Przemyslaw_Paczoski.pdf",
        class: "btn--resume"
      }
    };
  }
};
</script>

<style lang="scss">
@import "config";

.home {
  height: 80vh;
  display: flex;
  flex-direction: column;
}

h1 {
  font-size: 45px;
  font-weight: 600;
  color: $header-color;
  position: relative;

  @include mediaSmartfon {
    font-size: 30px;
  }
}

h1:after {
  @include shadow;
}

h2 {
  color: $text-color;
  font-size: 32px;
  font-weight: 400;

  @include mediaSmartfon {
    font-size: 20px;
  }
}

h3 {
  color: $text-color;
  font-size: 24px;
  font-weight: 400;

  @include mediaSmartfon {
    font-size: 17px;
  }
}

.home--grid {
  display: grid;
  grid-template-columns: 230px repeat(12, 107px) 230px;
  grid-column-gap: 16px;

  @include mediaSmartfon {
    grid-template-columns: 7% 86% 7%;
  }

  .home__header {
    grid-column-start: 3;
    grid-column-end: 9;
  }

  .home__content {
    grid-column-start: 9;
    grid-column-end: 15;
  }
}

.home__header {
  position: relative;

  @include mediaSmartfon {
    text-align: center;
  }
}
</style>

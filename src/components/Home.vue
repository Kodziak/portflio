<template>
  <div class="home">
    <div class="flex-1"></div>
    <div class="home--grid">
      <div class="home__container">
        <div class="home__header">
          <h1>Hi, I'm Przemek.</h1>
          <br>
          <h2>I'm a Test Automation Developer.</h2>
        </div>
        <div class="home__content">
          <Description v-for="(content, index) in desc" :key="index" :content="content"/>
        </div>
        <div class="home__links">
          <Link v-for="(contact, index) in contacts" :key="index" :contact="contact"/>
        </div>
        <Button :btn="btn">{{ btn.name }}</Button>
      </div>
      <div class="home__logo">
        <img src="../assets/Logo.svg">
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
        "I write tests with Jest.io and Puppeteer.",
        "I write HTML, CSS and JavaScript with Vue.",
        "Sometimes I design in Adobe Xd."
      ],
      contacts: [
        {
          link: "mailto:paczoski.przemyslaw@gmail.com",
          content: "Say hello via mail"
        },
        {
          link: "https://twitter.com/Kodziakkk",
          content: "Follow me on Twitter"
        },
        { link: "https://floog.me", content: "View my blog" }
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

h2 {
  color: $text-color;
  font-size: 30px;
  font-weight: 400;

  @include mediaSmartfon {
    font-size: 20px;
  }
}

h3 {
  font-size: 27px;
  color: $text-color;
  font-weight: 400;

  @include mediaSmartfon {
    font-size: 17px;
  }
}

img {
  margin: auto 5px auto 0;
}

.home--grid {
  display: grid;
  grid-template-columns: 10% 40% 40% 10%;

  @include mediaSmartfon {
    grid-template-columns: 7% 86% 7%;
  }

  .home__container {
    grid-column-start: 2;
  }

  .home__logo {
    grid-column-start: 3;
    display: flex;
    justify-content: flex-end;

    @include mediaSmartfon {
      display: none;
    }

    img {
      margin: auto 0 auto auto;
      animation: spin 4s linear infinite;
    }
  }
}

.home__header {
  position: relative;

  @include mediaSmartfon {
    text-align: center;
  }
}

.home__content {
  margin: 35px 0;
  flex-direction: column;
  margin: 13px 0;
}

.home__links {
  color: $text-color;
  margin: 35px 0;
}
</style>
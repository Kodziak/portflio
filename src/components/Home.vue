<template>
  <div class="home">
    <div class="flex-1"></div>
    <div class="home_grid">
      <div class="container_content">
        <div class="home_header">
          <h1>Hi, I'm Przemek.</h1>
          <br>
          <h2>I'm a Test Automation Developer.</h2>
        </div>
        <div class="home_content">
          <div v-for="(content, index) in desc" :key="index" class="row">
            <img src="../assets/Lines.svg">
            <h3>{{ content }}</h3>
          </div>
        </div>
        <div class="home_links">
          <div v-for="(list, index) in contact" :key="index" class="link">
            <img src="../assets/Lines_mini.svg">
            <a
              v-bind:target="/^http/.test(list.link) ? '_blank' : '_self'"
              v-bind:href="list.link"
              rel="noopener noreferrer"
            >{{ list.content }}</a>
          </div>
        </div>
        <a
          href="./CV_Przemyslaw_Paczoski.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="button resume_button"
        >view resume</a>
      </div>
      <div class="container_logo">
        <img src="../assets/Logo.svg">
      </div>
    </div>
    <div class="flex-1"></div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      desc: [
        "Based in Poland.",
        "I write tests with Jest.io and Puppeteer.",
        "I write HTML, CSS and JavaScript with Vue.",
        "Sometimes I design in Adobe Xd."
      ],
      contact: [
        {
          link: "mailto:paczoski.przemyslaw@gmail.com",
          content: "Say hello via mail"
        },
        {
          link: "https://twitter.com/Kodziakkk",
          content: "Follow me on Twitter"
        },
        { link: "https://floog.me", content: "View my blog" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "config";

.home {
  height: 80vh;
  display: flex;
  flex-direction: column;
}

h1,
h2,
h3 {
  margin: 0;
  padding: 0;
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

.home_grid {
  display: grid;
  grid-template-columns: 10% 40% 40% 10%;

  @include mediaSmartfon {
    grid-template-columns: 7% 86% 7%;
  }

  .container_content {
    grid-column-start: 2;
  }

  .container_logo {
    grid-column-start: 3;
    display: flex;
    justify-content: flex-end;

    @include mediaSmartfon {
      display: none;
    }

    img {
      margin: auto 0 auto auto;
    }
  }
}

.home_header {
  position: relative;

  @include mediaSmartfon {
    text-align: center;
  }
}

.home_content {
  margin: 35px 0;

  .row {
    display: flex;
    flex-direction: row;
    margin: 13px 0;
  }
}

.home_links {
  color: $text-color;
  display: flex;
  flex-direction: column;
  margin: 50px 0;

  .link {
    margin: 2px 0;
    display: flex;

    a {
      cursor: pointer;
      position: relative;

      @include mediaSmartfon {
        font-size: 15px;
      }
    }

    a:after {
      @include shadow;
    }
  }
}

.button {
  text-align: center;
  padding: 6px 60px;
  background: $shadow-color-opacity;
  border: 2px $text-color solid;
  border-radius: 3px;
  cursor: pointer;
  color: $header-color;
  font-size: 20px;

  @include mediaSmartfon {
    display: flex;
    justify-content: center;
  }
}
</style>
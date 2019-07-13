<template>
  <div class="home">
    <div class="home--grid">
      <div class="home__header">
        <h1>Hi, I'm Przemek.</h1>
        <h2>I'm a Test Developer and Scrum Master.</h2>
        <div class="home__header--media"><Link v-for="(media, index) in medias" :key="index" :media="media" /></div>
      </div>
      <div class="home__content">
        <Description v-for="(content, index) in desc" :key="index" :content="content" />
        <Button :btn="btn">{{ btn.name }}</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Description from "./homeComponents/Description.vue";
import Link from "./homeComponents/Link";
import Button from "./otherComponents/Button";

export default {
  name: "Home",
  components: {
    Description,
    Link,
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
      medias: [
        {
          title: "Mail",
          link: "mailto:kodziak1416@gmail.com",
          icon_class: "link-mail"
        },
        {
          title: "Linkedin",
          link: "https://linkedin.com/in/ppaczoski/",
          icon_class: "link-linkedin"
        },
        {
          title: "Twitter",
          link: "https://twitter.com/Kodziakkk",
          icon_class: "link-twitter"
        },
        {
          title: "Github",
          link: "https://github.com/Kodziak/",
          icon_class: "link-github"
        }
      ],
      btn: {
        name: "View my resume",
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
  height: calc(100vh - 59px);
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  margin: 5px 0 0 0;

  @include mediaSmartfon {
    font-size: 20px;
    margin: 0 10%;
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
  grid-template-columns: 10% repeat(12, 8%) 10%;
  grid-column-gap: 8px;

  @include mediaSmartfon {
    grid-template-columns: 10% 80% 10%;
    grid-column-gap: 0px;
  }

  .home__header {
    grid-column-start: 3;
    grid-column-end: 8;

    @include mediaSmartfon {
      grid-column-start: 1;
    }
  }

  .home__content {
    grid-column-start: 8;
    grid-column-end: 12;

    @include mediaSmartfon {
      grid-column-start: 1;
      margin-top: 30px;
      justify-self: center;
    }

    .btn {
      margin-top: 10px;

      @include mediaSmartfon {
        margin-top: 30px;
      }
    }
  }
}

.home__header {
  align-self: center;
  position: relative;

  @include mediaSmartfon {
    text-align: center;
  }

  &--media {
    display: flex;
    flex-direction: row;
    margin-top: 15px;

    @include mediaSmartfon {
      justify-content: center;
    }

    .link {
      margin-right: 25px;

      @include mediaSmartfon {
        margin: 0 12px;
      }

      &::hover {
        color: grey;
      }
    }
  }
}
</style>

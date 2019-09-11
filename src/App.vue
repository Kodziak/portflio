<template>
  <div id="app">
    <header>
      <div class="menu__hamburger" v-on:click="handleHamburger">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="menu">
        <button class="menu-btn" v-for="btn in btns" :key="btn.id" v-on:click="selectComponent(btn.component)">
          {{ btn.name }}
        </button>
      </div>
    </header>
    <component :is="selectedComponent" @componentFromChildren="handleComponent"></component>
    <div class="socials">
      <Social v-for="(social, index) in socials" :key="index" :social="social"></Social>
    </div>
  </div>
</template>

<script>
import Home from "./views/Home.vue";
import WhoAmI from "./views/WhoAmI.vue";
import Projects from "./views/Projects.vue";
import Social from "./components/Social";

export default {
  name: "app",
  components: {
    Home,
    WhoAmI,
    Projects,
    Social
  },
  data() {
    return {
      selectedComponent: "Home",
      btns: [
        { id: 1, name: "HOME", component: "Home" },
        { id: 2, name: "WHO AM I", component: "WhoAmI" },
        { id: 3, name: "PROJECTS", component: "Projects" }
      ],
      socials: [
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
      ]
    };
  },
  created() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  },
  mounted() {
    this.setMenuState("Home");
  },
  methods: {
    setComponent(component) {
      this.selectedComponent = component;
    },
    setMenuState(component) {
      const menuButtons = document.querySelectorAll(".menu-btn");

      menuButtons.forEach(el => {
        let clicked = el.textContent.replace(/\s/g, "").toLowerCase();
        let comp = component.replace(/\s/g, "").toLowerCase();
        el.classList.remove("menu-btn--active");
        if (clicked === comp) {
          el.classList.add("menu-btn--active");
        }
      });
    },

    handleComponent(component) {
      this.setMenuState(component);
      this.setComponent(component);
    },
    selectComponent: function(component) {
      const menuHamburger = document.querySelector(".menu__hamburger");
      const menu = document.querySelector(".menu");
      const menuButtons = document.querySelectorAll(".menu-btn");
      menuButtons.forEach(() => {
        menuHamburger.classList.remove("active");
        menu.classList.remove("active");
      });

      this.setMenuState(component);
      this.setComponent(component);
    },

    handleHamburger() {
      const menuHamburger = document.querySelector(".menu__hamburger");
      const menu = document.querySelector(".menu");

      if (menuHamburger.classList.contains("active")) {
        menuHamburger.classList.remove("active");
        menu.classList.remove("active");
      } else {
        menuHamburger.classList.add("active");
        menu.classList.add("active");
      }
    }
  }
};
</script>

<style lang="scss">
@import "./configs/_config";

* {
  box-sizing: border-box;
}

html {
  background-image: linear-gradient(45deg, $background-color, $background-opacity-color);
  background-repeat: no-repeat;
}

body {
  margin: 0;
  font-family: "Montserrat", sans-serif;
  color: $text-basic-color;

  a,
  button {
    all: unset;
  }
}

::-webkit-scrollbar {
  display: none;
}

#app {
  // height: 100vh;
  // height: calc(var(--vh, 1vh) * 100);
  // min-height: -webkit-fill-available;
  width: 100vw;
  mix-blend-mode: screen;
}

header {
  height: calc(var(--vh, 1vh) * 5);
  display: grid;
  grid-template-columns: 2% repeat(12, 7%) 2%;
  grid-column-gap: 1%;

  @include mediaSmartfon {
    display: flex;
    flex-direction: column;
  }

  .menu {
    grid-column: 3 / 13;
    justify-self: end;
    // margin-top: 20px;

    @include mediaSmartfon {
      display: none;
    }

    &.active {
      background: $black;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: absolute;
      z-index: 99;
      margin-top: 0;
      animation: fadeInOut 1s ease-in-out;

      .menu-btn {
        align-self: center;
      }
    }

    @include mediaDesktop {
      &-btn--active:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 4px;
        top: 0;
        right: 0;
        background: $text-basic-color;
        // TODO: Add effet on click. Old element - remove bar smoothly, clicked element add bar smoothly
      }
    }

    &-btn--active {
      font-weight: bold;
    }

    &-btn {
      position: relative;
      font-size: 24px;
      padding: 20px 5px 10px;
      cursor: pointer;

      &:hover {
        background: lighten($background-color, 10%);
        border-radius: 4px;
      }
    }

    &-btn:nth-child(2) {
      margin: 0 80px;

      @include mediaSmartfon {
        margin: 50px 0;
      }
    }
  }

  .menu__hamburger {
    align-self: flex-end;
    width: 45px;
    padding: 10px;
    margin: 20px 20px 0 0;

    @include mediaDesktop {
      display: none;
    }

    ul {
      width: 25px;
      height: 19px;
      list-style-type: none;
      margin: 0;
      padding: 0;
      position: relative;

      li {
        position: absolute;
        width: 25px;
        height: 3px;
        background: $text-basic-color;
        transform: rotate(0deg);

        &:nth-child(2) {
          top: 8px;
        }

        &:last-child {
          top: 16px;
        }
      }
    }

    &.active {
      z-index: 100;

      ul {
        li {
          transition: all 1s ease;
        }

        li:first-child {
          transform: rotate(45deg);
          top: 10px;
        }

        li:nth-child(2) {
          display: none;
        }

        li:last-child {
          top: 10px;
          transform: rotate(135deg);
        }
      }
    }
  }
}

.socials {
  height: calc(var(--vh, 1vh) * 5);
  display: flex;
  margin-left: 30px;

  @include mediaSmartfon {
    justify-content: center;
    margin: 0;
  }

  .link {
    margin: 0 20px;
  }
}

h1,
h2,
h3,
h4,
h5,
p {
  margin: 0;
  padding: 0;
  color: $text-basic-color;
}

h1 {
  font-size: 128px;
  font-weight: 600;
  line-height: 156px;

  @include mediaSmartfon {
    font-size: 48px;
    line-height: 72px;
  }
}

h2 {
  font-size: 64px;
  font-weight: 600;

  @include mediaSmartfon {
    font-size: 36px;
  }
}

.wrapper--background {
  position: relative;

  &:before {
    position: absolute;
    content: "";
    width: 100%;
    background: $background-color;
    z-index: -1;
  }

  &:after {
    position: absolute;
    content: "";
    height: 10px;
    width: 100%;
    background: $shadow-color;
    z-index: 1;
  }
}

.wrapper--grid {
  height: calc(var(--vh, 1vh) * 90);
  display: grid;
  grid-template-columns: 2% repeat(12, 7%) 2%;
  grid-column-gap: 1%;
  grid-template-rows: 2% repeat(12, 7%) 2%;
  grid-row-gap: 1%;

  @include mediaSmartfon {
    grid-column-start: 1;
  }
}

h3 {
  font-size: 36px;

  @include mediaSmartfon {
    font-size: 24px;
  }
}

h4 {
  font-size: 24px;

  @include mediaSmartfon {
    font-size: 18px;
  }
}

p {
  font-size: 18px;
  color: $text-description-color;
}
</style>

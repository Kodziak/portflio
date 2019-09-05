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
        <button class="menu-btn" v-for="btn in btns" :key="btn.id" v-on:click="selectComponent(btn.component, $event)">
          {{ btn.name }}
        </button>
      </div>
    </header>
    <component :is="selectedComponent" @componentFromChildren="handleComponent"></component>
  </div>
</template>

<script>
import Home from "./views/Home.vue";
import WhoAmI from "./views/WhoAmI.vue";
import Projects from "./views/Projects.vue";

export default {
  name: "app",
  components: {
    Home,
    WhoAmI,
    Projects
  },
  data() {
    return {
      selectedComponent: "Home",
      btns: [
        { id: 1, name: "HOME", component: "Home" },
        { id: 2, name: "WHO AM I", component: "WhoAmI" },
        { id: 3, name: "PROJECTS", component: "Projects" }
      ]
    };
  },
  methods: {
    handleComponent(component) {
      this.selectedComponent = component;
    },
    selectComponent: function(component, event) {
      if (this.activeLink) {
        this.activeLink.classList.remove("menu-btn--active");
      }
      this.activeLink = event.target;
      this.activeLink.classList.add("menu-btn--active");

      const menuHamburger = document.querySelector(".menu__hamburger");
      const menu = document.querySelector(".menu");
      const menuButtons = document.querySelectorAll(".menu-btn");
      menuButtons.forEach(el => {
        if (menuHamburger.classList.contains("active")) {
          menuHamburger.classList.remove("active");
          menu.classList.remove("active");
        } else {
          menuHamburger.classList.add("active");
          menu.classList.add("active");
        }
      });

      this.selectedComponent = component;
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
  height: 100vh;
  width: 100vw;
}

body {
  height: 100vh;
  margin: 0;
  font-family: "Montserrat", sans-serif;
  color: $text-basic-color;
  background-image: linear-gradient(45deg, $background-color, $background-opacity-color);

  a,
  button {
    all: unset;
  }
}

::-webkit-scrollbar {
  display: none;
}

#app {
  height: 100vh;
  width: 100vw;
}

header {
  height: 5%;
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
    margin-top: 20px;

    @include mediaSmartfon {
      display: none;
    }

    &.active {
      background: black;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: absolute;
      height: 100vh;
      width: 100vw;
      z-index: 99;
      margin-top: 0;

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
        top: -20px;
        // opacity: 1;
        background: $text-basic-color;
        // transition: opacity 1s ease-in-out;
        // TODO: Add effet on click. Old element - remove bar smoothly, clicked element add bar smoothly
      }
    }

    &-btn--active {
      font-weight: bold;
    }

    &-btn {
      position: relative;
      font-size: 24px;
      cursor: pointer;
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
    margin: 10px 3% 0 0;

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
        background: white;
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

h1,
h2,
h3,
h4,
h5,
p {
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 128px;
  font-weight: 600;
  line-height: 156px;
  color: $text-basic-color;
  @include mediaSmartfon {
    font-size: 64px;
    line-height: 96px;
  }
}

h2 {
  font-size: 64px;
  font-weight: 600;
  color: $text-basic-color;
}

.wrapper--grid {
  height: 95%;
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
}

h4 {
  font-size: 24px;
}

p {
  font-size: 10px;
  color: $text-description-color;
}
</style>

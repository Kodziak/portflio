<template>
  <div id="app">
    <header>
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

      this.selectedComponent = component;
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
  height: 100%;
  width: 100%;
}

body {
  height: 100%;
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
  height: 100%;
  width: 100%;
}

header {
  height: 5%;
  display: grid;
  grid-template-columns: 2% repeat(12, 7%) 2%;
  grid-column-gap: 1%;

  .menu {
    grid-column: 3 / 13;
    justify-self: end;
    margin-top: 20px;

    @include mediaSmartfon {
      display: none;
    }

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

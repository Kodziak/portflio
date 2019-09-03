<template>
  <div id="app">
    <header>
      <div class="line"></div>
      <div class="menu">
        <button class="menu-btn" v-for="btn in btns" :key="btn.id" v-on:click="selectComponent(btn.component, $event)">
          {{ btn.name }}
        </button>
      </div>
    </header>
    <component v-bind:is="selectedComponent"></component>
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

.menu-btn--active {
  font-weight: bold;
}

.menu {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 20px;

  &-btn {
    font-size: 24px;
    margin: 0 10px;
    position: relative;
    cursor: pointer;

    @include mediaSmartfon {
    }
  }

  &-btn:last-child {
    @include mediaSmartfon {
    }
  }
}
</style>

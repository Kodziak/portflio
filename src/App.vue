<template>
  <div id="app">
    <header>
      <div class="menu">
        <img src="./assets/Logo_mini.svg">
        <div class="flex-1"></div>
        <button
          class="button"
          v-for="btn in btns"
          :key="btn.id"
          v-on:click="selectComponent(btn.component, $event)"
        >{{btn.name}}</button>
      </div>
    </header>
    <component v-bind:is="selectedComponent"></component>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Projects from "./components/Projects.vue";

export default {
  name: "app",
  components: {
    Home,
    Projects
  },
  data() {
    return {
      selectedComponent: "Home",
      btns: [
        { id: 1, name: "home", component: "Home" },
        { id: 2, name: "projects", component: "Projects" }
      ]
    };
  },
  methods: {
    selectComponent: function(component, event) {
      if (this.activeLink) {
        this.activeLink.classList.remove("active");
      }
      this.activeLink = event.target;
      this.activeLink.classList.add("active");

      this.selectedComponent = component;
    }
  }
};
</script>

<style lang="scss">
@import "components/config";

body {
  margin: 0;
  font-family: "Montserrat", sans-serif;
  color: $header-color;
  background: $background-color;

  a,
  button {
    all: unset;
  }
}

#app {
  display: flex;
  flex-direction: column;
}

.flex-1 {
  flex-grow: 1;
}

.active {
  font-weight: 600;
}

h1,
h2,
h3,
p {
  display: inline-block;
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
  position: absolute;
  content: "";
  width: 101%;
  height: 50%;
  top: 0;
  left: 0;
  box-shadow: -3px 30px 0px 0px $shadow-color-opacity;
  z-index: -1;

  @include mediaSmartfon {
    box-shadow: -3px 20px 0px 0px $shadow-color-opacity;
  }
}

.menu {
  display: flex;
  margin: 0 10%;
  position: relative;

  img {
    display: none;

    @include mediaSmartfon {
      display: block;
    }
  }

  .button {
    margin: 30px 30px;
    font-size: 20px;
    cursor: pointer;
    position: relative;

    @include mediaSmartfon {
      margin: 25px 10px;
    }
  }
}

.shadow {
  position: absolute;
  background-color: $shadow-color-opacity;
  z-index: 1;
}
</style>

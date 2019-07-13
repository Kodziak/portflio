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
      btns: [{ id: 1, name: "home", component: "Home" }, { id: 2, name: "projects", component: "Projects" }]
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
@import "components/config";

* {
  box-sizing: border-box;
}

body {
  width: 100%;
  height: 100%;
  margin: 0;
  font-family: "Montserrat", sans-serif;
  color: $header-color;
  background: $background-color;

  a,
  button {
    all: unset;
  }
}

::-webkit-scrollbar {
  display: none;
}

#app {
  display: flex;
  flex-direction: column;
}

.flex-1 {
  flex-grow: 1;
}

.line {
  width: 100%;
  height: 10px;
  background-color: $shadow-color;
}

.menu-btn--active {
  font-weight: 600;
}

h1,
p {
  display: inline-block;
  margin: 0;
  padding: 0;
}

.menu {
  display: flex;
  flex-direction: row;
  justify-content: center;
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

  &-btn::after {
    @include shadow;
  }
}
</style>

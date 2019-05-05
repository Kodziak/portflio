<template>
  <div id="app">
    <header>
      <div class="menu">
        <div class="flex-1"></div>
        <button
          class="menu-btn"
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

.menu-btn--active {
  font-weight: 600;
}

h1,
h2,
h3,
p {
  color: #cecece;
  display: inline-block;
  margin: 0;
  padding: 0;
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

.menu {
  display: flex;
  margin: 0 10%;
  position: relative;

  &-btn {
    margin: 30px 30px;
    font-size: 20px;
    cursor: pointer;
    position: relative;

    @include mediaSmartfon {
      margin: 25px 10px;
    }
  }

  &-btn::after {
    @include shadow;
  }
}

.btn {
  display: inline-block;
  color: $header-color;
  font-size: 20px;
  text-align: center;
  vertical-align: middle;
  border-radius: 5px;
  cursor: pointer;
}
</style>

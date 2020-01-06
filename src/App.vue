<template>
  <div id="app">
    <header>
      <div class="menu">
        <button
          class="menu-btn"
          v-for="btn in btns"
          :key="btn.id"
          v-on:click="selectComponent(btn.component)"
        >
          {{ btn.name }}
        </button>
      </div>
    </header>
    <component
      :is="selectedComponent"
      @componentFromChildren="handleComponent"
    ></component>
    <div class="socials">
      <Social
        v-for="(social, index) in socials"
        :key="index"
        :social="social"
        :class="social.background"
      ></Social>
    </div>
    <img class="polygons" src="../src/assets/polygons_dark.svg" alt="Darkness...">
  </div>
</template>

<script>
import Home from './views/Home.vue';
import WhoAmI from './views/WhoAmI.vue';
import Projects from './views/Projects.vue';
import Social from './components/Social.vue';

export default {
  name: 'app',
  components: {
    Home,
    WhoAmI,
    Projects,
    Social,
  },
  data() {
    return {
      selectedComponent: 'Home',
      btns: [
        { id: 1, name: 'HOME', component: 'Home' },
        { id: 2, name: 'WHO AM I', component: 'WhoAmI' },
        { id: 3, name: 'PROJECTS', component: 'Projects' },
      ],
      socials: [
        {
          title: 'Mail',
          link: 'mailto:kodziak1416@gmail.com',
          icon: 'mail',
          background: 'icon-mail',
        },
        {
          title: 'Linkedin',
          link: 'https://linkedin.com/in/ppaczoski/',
          icon: 'linkedin',
          background: 'icon-linkedin',
        },
        {
          title: 'Twitter',
          link: 'https://twitter.com/Kodziakkk',
          icon: 'twitter',
          background: 'icon-twitter',
        },
        {
          title: 'Github',
          link: 'https://github.com/Kodziak/',
          icon: 'github',
          background: 'icon-github',
        },
      ],
    };
  },
  created() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
      vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  },
  mounted() {
    this.setMenuState('Home');
  },
  methods: {
    setComponent(component) {
      this.selectedComponent = component;
    },
    setMenuState(component) {
      const menuButtons = document.querySelectorAll('.menu-btn');

      menuButtons.forEach((el) => {
        const clicked = el.textContent.replace(/\s/g, '').toLowerCase();
        const comp = component.replace(/\s/g, '').toLowerCase();
        el.classList.remove('menu-btn--active');
        if (clicked === comp) {
          el.classList.add('menu-btn--active');
        }
      });
    },

    handleComponent(component) {
      this.setMenuState(component);
      this.setComponent(component);
    },
    selectComponent(component) {
      const menu = document.querySelector('.menu');
      const menuButtons = document.querySelectorAll('.menu-btn');
      menuButtons.forEach(() => {
        menu.classList.remove('active');
      });

      this.setMenuState(component);
      this.setComponent(component);
    },
  },
};
</script>

<style lang="scss">
@import "./configs/_config";
@import "./configs/_font";

* {
  box-sizing: border-box;
}

html {
  background-image: linear-gradient(
    45deg,
    $background-base,
    $background-top
  );
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
  width: 100vw;
  position: relative;
  overflow: hidden;
}

header {
  height: calc(var(--vh, 1vh) * 5);
  display: grid;
  grid-template-columns: 2% repeat(12, 7%) 2%;
  grid-column-gap: 1%;

  .menu {
    grid-column: 3 / 13;
    justify-self: end;

    @include mediaSmartfon {
      grid-column: 2 / 14;
      justify-self: center;
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

    &-btn--active:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 4px;
      top: 0;
      right: 0;
      background: $text-basic-color;
    }

    &-btn--active {
      font-weight: bold;
    }

    &-btn {
      position: relative;
      font-size: 24px;
      padding: 20px 5px 10px;
      cursor: pointer;

      @include mediaSmartfon {
        font-size: 18px;
      }

      &:hover {
        background: lighten($background-base, 10%);
        border-radius: 4px;
      }
    }

    &-btn:nth-child(2) {
      margin: 0 80px;

      @include mediaSmartfon {
        margin: 0 10px;
      }
    }
  }
}

.socials {
  height: calc(var(--vh, 1vh) * 5);
  display: flex;
  justify-content: center;

  @include mediaSmartfon {
    justify-content: center;
    margin: 0;
  }
}

.wrapper--background {
  position: relative;

  &:before {
    position: absolute;
    content: "";
    width: 100vw;
    height: 140%;
    left: -10vw;
    top: -20%;
    background: $background-base;
    z-index: -1;
  }

  &:after {
    position: absolute;
    content: "";
    height: 10px;
    width: 100vw;
    left: -10vw;
    top: 120%;
    background: $shadow-color;
    z-index: -1;
  }
}

.view {
  width: 70%;
  height: calc(var(--vh, 1vh) * 85);
  margin: 0 auto;
}

.view__header {
  height: calc(var(--vh, 1vh) * 5);
  padding-left: 140px;
  display: inline-block;

  @include mediaSmartfon {
    padding-left: 30px;
  }
}

.header--bg {
    background: $purple-opacity;
    width: 105%;
    text-align: center;

    @include mediaSmartfon {
      margin: 30px 0;
    }
  }

  .polygons {
    position: absolute;
    right: -220px;
    bottom: -90px;
    overflow: hidden;
  }
</style>

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
          link: 'https://twitter.com/_kodziak',
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
  background-image:
    linear-gradient(307deg, transparent 0%, transparent 10%,rgba(190, 190, 190,0.04) 10%, rgba(190, 190, 190,0.04) 64%,transparent 64%, transparent 100%),
    linear-gradient(118deg, transparent 0%, transparent 11%,rgba(190, 190, 190,0.04) 11%, rgba(190, 190, 190,0.04) 31%,transparent 31%, transparent 100%),
    linear-gradient(73deg, transparent 0%, transparent 22%,rgba(190, 190, 190,0.04) 22%, rgba(190, 190, 190,0.04) 90%,transparent 90%, transparent 100%),
    linear-gradient(156deg, transparent 0%, transparent 51%,rgba(190, 190, 190,0.04) 51%, rgba(190, 190, 190,0.04) 97%,transparent 97%, transparent 100%),
    linear-gradient(90deg, rgb(0,0,0),rgb(0,0,0))
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
  height: calc(var(--vh, 1vh) * 6);
  display: grid;
  grid-template-columns: 2% repeat(12, 7%) 2%;
  grid-column-gap: 1%;
  background: darken($black, 10);

  @include mediaSmartfon {
    height: calc(var(--vh, 1vh) * 7);
  }

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
      padding: 20px 5px 10px;
      cursor: pointer;

      &:hover {
        color: darken($white, 25);
      }
    }

    &-btn:nth-child(2) {
      margin: 0 40px;

      @include mediaSmartfon {
        margin: 0 10px;
      }
    }
  }
}

.socials {
  height: calc(var(--vh, 1vh) * 7);
  display: flex;
  justify-content: center;

  @include mediaSmartfon {
    justify-content: center;
    margin: 0;
  }
}

.view {
  width: 70%;
  min-height: calc(var(--vh, 1vh) * 87);
  margin: 0 auto;
  max-width: 1350px;

  @include mediaSmartfon {
    width: 85%;
    min-height: calc(var(--vh, 1vh) * 86);
  }
}

.view__header {
  min-height: calc(var(--vh, 1vh) * 10);
  padding-left: 0;
  display: inline-block;
}

.view__content {
  min-height: calc(var(--vh, 1vh) * 75);

  @include mediaSmartfon {
    min-height: calc(var(--vh, 1vh) * 69);
  }
}

.header--bg {
    background: $purple-opacity;
    width: 105%;
    text-align: center;


      margin: 30px 0;

  }


.project + .polygons {
  @include mediaSmartfon {
    bottom: -160px;
  }
}

.polygons {
    position: absolute;
    right: -350px;
    bottom: -90px;
    overflow: hidden;
    z-index: -1;

    @include mediaSmartfon {
      width: 50%;
      height: 50%;
      right: -70px;
      bottom: -120px;
    }
  }
</style>

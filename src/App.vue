<template>
  <div id="app">
    <header>
      <div class="menu view view--menu">
        <router-link
          class="menu-btn"
          v-for="btn in btns"
          :key="btn.id"
          v-on:click.native="changeMenuState(btn.component)"
          :to="btn.target"
        >
          {{ btn.name }}
        </router-link>
      </div>
    </header>
    <router-view ></router-view>
    <div class="socials view--footer">
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
import Social from './components/Social.vue';
import utils from './utils';

export default {
  name: 'app',
  components: {
    Social,
  },
  data() {
    return {
      btns: [
        {
          id: 1, name: 'HOME', target: '/', component: 'Home',
        },
        {
          id: 2, name: 'WHO AM I', target: '/who-am-i', component: 'WhoAmI',
        },
        {
          id: 3, name: 'PROJECTS', target: '/projects', component: 'Projects',
        },
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
  methods: {
    changeMenuState(component) {
      utils.setMenuState(component);
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
  background: darken($black, 10);

  .menu {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    @include mediaSmartfon {
      justify-content: center;
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

    &-btn--active:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      top: 0;
      right: 0;
      background: $white;
    }

    &-btn--active {
      color: $white;
      font-weight: bold;
    }
  }
}

.view {
  width: $width-desktop;
  margin: 0 auto;

  @include mediaSmartfon {
    width: $width-mobile
  }

  &--page {
    min-height: calc(var(--vh, 1vh) * 88);

    @include mediaSmartfon {
      min-height: calc(var(--vh, 1vh) * 87);
    }
  }

  &--menu {
    min-height: calc(var(--vh, 1vh) * 5);
  }

  &--header {
    min-height: calc(var(--vh, 1vh) * 8);
    padding-left: 0;
    display: inline-block;
  }

  &--content {
    min-height: calc(var(--vh, 1vh) * 80);
    // max-width: $max-width;

    @include mediaSmartfon {
      min-height: calc(var(--vh, 1vh) * 79);
    }
  }

  &--footer {
    height: calc(var(--vh, 1vh) * 7);
  }
}

.socials {
  display: flex;
  justify-content: center;

  @include mediaSmartfon {
    justify-content: center;
    margin: 0;
  }
}

.header--bg {
    background: $purple-opacity;
    width: 105%;
    text-align: center;
    margin: 30px 0 0 0;
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

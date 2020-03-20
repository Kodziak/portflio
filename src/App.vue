<template>
  <div id="app">
    <vue-navbar :btns="btns" />

    <transition
      name="component-fade"
      mode="out-in"
    >
      <router-view />
    </transition>

    <social-bar
      :socials="socials"
    />

    <img
      class="
      polygons"
      src="../src/assets/polygons_dark.svg"
      alt="Darkness..."
    >
  </div>
</template>

<script>
import { menuButtons as btns, socials } from './data/index';
import SocialBar from './components/socials/SocialBar.vue';
import VueNavbar from './components/navbar/NavBar.vue';


export default {
  name: 'App',
  components: {
    VueNavbar,
    SocialBar,
  },

  data() {
    return {
      btns,
      socials,
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
};
</script>

<style lang="scss" scoped>
@import "./configs/_config";

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

.project ~ .polygons {
  @include mediaSmartfon {
    display: none;
  }
}


</style>

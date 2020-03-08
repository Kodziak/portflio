<template>
  <div class="home view--page">
    <div class="home__content">
      <div class="home__header header--bg">
        <h1
          class="glitch"
          data-text="Przemysław Paczoski"
        >
          Przemysław Paczoski
        </h1>
      </div>
      <h2 class="home__description">
        Test Developer | Scrum Master
      </h2>
      <linked-button
        :btn="btn"
      >
        {{ btn.name }}
      </linked-button>
    </div>
  </div>
</template>

<script>
import LinkedButton from '../components/button/Button.vue';

import utils from '../utils';

export default {
  name: 'Home',
  components: {
    LinkedButton,
  },
  data() {
    return {
      btn: {
        name: 'GET TO KNOW ME',
        router: true,
        class: 'btn btn--primary',
        target: '/who-am-i',
        click: this.changeMenuState('WhoAmI'),
      },
    };
  },
  mounted() {
    utils.setMenuState('Home');
  },
  methods: {
    changeMenuState(component) {
      utils.setMenuState(component);
    },
  },
};
</script>

<style lang="scss">
@import "../configs/_config";
@import "../configs/_glitch";

.home {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &__header {
    margin: 20px 0!important;

    @include mediaSmartfon {
      margin: 10px 0!important;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__description {
    margin-bottom: 30px;
    font-weight: 400;

    @include mediaSmartfon {
      font-size: 18px;
      margin-bottom: 20px;
    }
  }
}
</style>

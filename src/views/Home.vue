<template>
  <div class="home view">
    <div class="home__content">
      <div class="home__header">
        <h1 class="glitch" data-text="Przemysław Paczoski">Przemysław Paczoski</h1>
      </div>
        <h2 class="home__description">Test Developer | Scrum Master</h2>
        <Button :btn="btn" :class="btn.type" @componentFromChildren="handleComponent">{{ btn.name }}</Button>
      </div>
  </div>
</template>

<script>
import Button from '../components/Button.vue';

export default {
  name: 'Home',
  components: {
    Button,
  },
  data() {
    return {
      btn: {
        name: 'GET TO KNOW ME',
        type: 'btn--primary',
        component: 'WhoAmI',
      },
    };
  },
  methods: {
    handleComponent(component) {
      this.$emit('componentFromChildren', component);
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

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__header {
    background: $purple-opacity;
    width: 105%;
    text-align: center;

  }

  &__description {
    font-weight: 400;
    margin: 50px 0;

    @include mediaSmartfon {
      font-size: 18px;
      margin: 20px 0;
    }
  }
}
</style>

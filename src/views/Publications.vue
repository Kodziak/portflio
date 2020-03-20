<template>
  <div class="publications view view--page">
    <vue-header :header="header" />
    <div class="publication__cards--wrapper view--content">
      <blockquote
        class="embedly-card"
        data-card-theme="dark"
      >
        <h4>
          <a
            href="https://medium.com/docplanner-tech/running-end-to-end-testing-with-jest-puppeteer-and-cucumber-8b229ecda6e2"
          >Running End-to-End Testing with Jest, Puppeteer, and Cucumber</a>
        </h4>
        <p>
          Docplanner is the world's biggest healthcare platform. We operate on 4 continents where services are available in 14 countries.
          Our patients make over 2 million visits each month. Our application...
        </p>
      </blockquote>
    </div>
  </div>
</template>

<script>
import VueHeader from '../components/header/Header.vue';

export default {
  name: 'Publications',
  components: {
    VueHeader,
  },
  data() {
    return {
      header: {
        title: 'PUBLICATIONS',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../configs/_config";
@import "../configs/_glitch";

.publication__cards--wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
</style>

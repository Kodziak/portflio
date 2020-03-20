<template>
  <div class="whoami view view--page">
    <vue-header :header="header" />
    <div class="whoami__wrapper view--content">
      <div class="whoami__content">
        <div class="whoami__description">
          <vue-header-small>Meet me.</vue-header-small>
          <p>
            Software is my passion, in which I happily improving daily by reading articles, building software and learning new technologies.
            Also, I’m spending much time reading books about personal growth, productivity, finances, security, design and other similar things.
            <br>I’m an <span>IT student</span> based in <span>Warsaw, Poland</span> with over two years of industry experience.
            <br>Daily working as a <span>Automation Tester</span> and <span>Scrum Master</span>.
            <br><span>Technologies</span> I work with: JavaScript (ES6+), TypeScript, VueJS, Jest, Puppeteer, Cucumber, Sass, HTML5, CSS3, Git.
          </p>
          <div class="whoami__buttons">
            <div
              v-for="(btn, index) in btns"
              :key="index"
            >
              <linked-button
                :btn="btn"
              >
                {{ btn.name }}
              </linked-button>
            </div>
          </div>
        </div>
        <div class="whoami__photo">
          <img
            src="../assets/photos/photo_dark_img-min.png"
            alt="Guy you're looking for."
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { whoamiButtons as btns } from '../data/index';

import VueHeaderSmall from '../components/header/HeaderSmall.vue';
import VueHeader from '../components/header/Header.vue';
import LinkedButton from '../components/button/Button.vue';

import utils from '../utils';

export default {
  name: 'WhoAmI',
  components: {
    VueHeaderSmall,
    VueHeader,
    LinkedButton,
  },
  data() {
    return {
      btns,
      header: {
        title: 'WHO AM I?',
      },
    };
  },

  mounted() {
    utils.setMenuState('WhoAmI');
  },

  methods: {
    changeMenuState(component) {
      utils.setMenuState(component);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../configs/_config";
@import "../configs/_glitch";

.whoami {
  .whoami__wrapper {
    display: flex;
    justify-content: center;

  .whoami__content {
    display: flex;

    @include mediaSmartfon {
      align-self: center;
      justify-self: center;
    }

    .whoami__photo {
      margin: auto 0;
      img {
        width: 330px;
        z-index: 2;

        @include mediaSmartfon {
          display: none;
        }
      }
    }

    .whoami__description {
      margin: auto 100px auto 0;

      @include mediaSmartfon {
        margin: auto 0;
      }

      p {
        margin: 40px 0 50px;

        span {
          color: $white;
          font-weight: 600;
        }
      }

      .whoami__buttons {
        display: flex;

        @include buttons {
          flex-direction: column;
        }

        div:first-child {
          margin: 5px 30px 5px 0;

          @include mediaSmartfon {
            margin: 5px;
          }
        }

        div:last-child {
          margin: 5px 5px 5px 0;
          z-index: 2;

          @include mediaSmartfon {
            margin: 5px;
          }
        }

        @include mediaSmartfon {
          flex-direction: column;

          div {
            align-self: center;
          }

          a {
            margin: 0 0 15px 0;
          }
        }
      }
    }
  }
  }
}
</style>

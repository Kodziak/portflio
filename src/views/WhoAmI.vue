<template>
  <div class="whoami view">
    <div class="view__header">
      <h2 class="glitch" data-text="WHO AM I?">WHO AM I?</h2>
    </div>
    <div class="whoami__content">
      <div class="whoami__description wrapper--background">
        <h3>Meet me.</h3>
        <p>
          Software is my passion, in which I happily improving daily by reading articles, building software and learning new technologies.
          Also, I’m spending much time reading books about personal growth, productivity, finances, security, design and other similar things.
          Currently, I’m an <span>IT student</span> based in <span>Warsaw, Poland</span> with over two years of experience.
          <br>I’m specialized in <span>test development</span> but had to presence working also as a <span>Scrum Master</span>.
          <br><span>Technologies</span> I work with: JavaScript (ES6+), TypeScript, Vue, Jest, Puppeteer, Cucumber, NodeJS, Sass, HTML5, CSS3, Git.
        </p>
        <div class="whoami__buttons">
          <div v-for="(btn, index) in btns" :key="index">
            <LinkedButton v-if="btn.link" :btn="btn" :class="btn.type">{{ btn.name }}</LinkedButton>
            <Button v-else :btn="btn" :class="btn.type" @componentFromChildren="handleComponent">{{ btn.name }}</Button>
          </div>
        </div>
      </div>
      <div class="whoami__photo">
        <img src="../assets/guy_youre_looking_for.svg" alt="Guy you're looking for." />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../components/Button.vue';
import LinkedButton from '../components/LinkedButton.vue';

export default {
  name: 'WhoAmI',
  components: {
    Button,
    LinkedButton,
  },
  data() {
    return {
      btns: [
        {
          name: 'VIEW RESUME',
          type: 'btn--secondary',
          link: './CV_Przemyslaw_Paczoski.pdf',
        },
        {
          name: 'CHECK MY WORK',
          type: 'btn--primary',
          component: 'Projects',
        },
      ],
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

.whoami {
  &.view {
    @include mediaSmartfon {
      display: flex;
      flex-direction: column;
    }
  }

  &__content {
    margin-top: 15px;
    display: flex;
    flex-direction: row;

    @include mediaSmartfon {
      align-self: center;
      justify-self: center;
    }

    .whoami__photo {
      img {
        z-index: 2;

        @include mediaSmartfon {
          display: none;
        }
      }
    }

    .whoami__description {
      margin: auto 0;

      h3 {
        margin-bottom: 15px;
        position: relative;
        display: inline-block;

        &::after {
          @include halfShadow;
        }
      }

      h4 {
        margin: 25px 0 15px 0;
        position: relative;
        display: inline-block;

        &::after {
          @include halfShadow;
        }
      }

      p {
        font-size: 18px;
        line-height: 27px;

        @include mediaSmartfon {
          font-size: 13px;
          line-height: 20px;
        }

        span {
          color: $text-basic-color;
          font-weight: 600;
        }
      }

      .whoami__buttons {
        margin-top: 30px;
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
            margin: 0 0 20px 0;
          }
        }
      }
    }
  }
}
</style>

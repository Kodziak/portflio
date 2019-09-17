<template>
  <div class="whoami wrapper--grid wrapper--background">
    <div class="whoami__header">
      <h2>WHO</h2>
    </div>
    <div class="whoami__content">
      <h3>Meet me.</h3>
      <p>
        My name is Przemek. I’m a <span>IT student</span> based in <span>warsaw</span> with over two years industry experience.
        I’m specialised with <span>test development</span>, using JavaScript, Puppeteer and Cucumber. Also I’am fascinated about
        <span>SCRUM methodology</span>.
      </p>
      <h4>Experience.</h4>
      <p>
        Currently working in <span>DOC PLANNER</span> team.<br />
        Had to presence to work in <span>XTB</span>.
      </p>
      <div class="whoami__buttons">
        <div v-for="(btn, index) in btns" :key="index">
          <LinkedButton v-if="btn.link" :btn="btn" :class="btn.type">{{ btn.name }}</LinkedButton>
          <Button v-else :btn="btn" :class="btn.type" @componentFromChildren="handleComponent">{{ btn.name }}</Button>
        </div>
      </div>
    </div>
    <img src="../assets/guy_youre_looking_for.svg" alt="Nothing" />
  </div>
</template>

<script>
import Button from "../components/Button";
import LinkedButton from "../components/LinkedButton";

export default {
  name: "WhoAmI",
  components: {
    Button,
    LinkedButton
  },
  data() {
    return {
      btns: [
        {
          name: "VIEW RESUME",
          type: "btn--secondary",
          link: "./CV_Przemyslaw_Paczoski.pdf"
        },
        {
          name: "CHECK MY WORK",
          type: "btn--primary",
          component: "Projects"
        }
      ]
    };
  },
  methods: {
    handleComponent(component) {
      this.$emit("componentFromChildren", component);
    }
  }
};
</script>

<style lang="scss">
@import "../configs/_config";
.whoami {
  @include mediaSmartfon {
    margin-bottom: 60px;
  }

  &.wrapper--background {
    &:before {
      height: 500px;
      top: 23%;
    }

    &:after {
      bottom: calc(100% - 23% - 500px);
    }

    @include mediaSmartfon {
      &:before {
        top: 20%;
      }

      &:after {
        bottom: calc(100% - 20% - 500px);
      }
    }
  }

  &__header {
    grid-column: 3 / 13;
    grid-row: 2 / 2;

    @include mediaSmartfon {
      margin-top: 30px;
    }
  }

  h2 {
    position: relative;
    display: inline-block;

    &:before {
      @include shadow;
    }

    &:after {
      content: "AM I?";
      position: absolute;
      width: 200%;
      font-weight: 400;
      top: 32%;
    }
  }

  img {
    grid-column: 8 / 13;
    grid-row: 3 / 12;
    // margin-top: 25px;
    justify-self: end;
    z-index: 2;

    @include mediaSmartfon {
      display: none;
    }
  }

  &__content {
    grid-column: 3 / 8;
    grid-row: 5 / 12;

    @include mediaSmartfon {
      grid-row: 5 / 9;
      width: 280px;
      justify-self: center;
      // align-self: end;
    }

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
        text-transform: uppercase;
      }
    }

    @include mediaSmartfon {
      grid-column: 3 / 13;
    }
  }

  &__buttons {
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
</style>

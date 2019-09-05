<template>
  <div class="whoami wrapper--grid">
    <h2>WHO</h2>
    <div class="whoami__content">
      <h3>Meet me.</h3>
      <p>
        My name is Przemek. I’m a <span>IT STUDENT</span> based in <span>WARSAW</span> with over two years industry experience.
        I’m specialised with <span>TEST DEVELOPMENT</span>, using JavaScript, Puppeteer and Cucumber. Also I’am fascinated about
        <span>SCRUM METHODOLOGY</span>.
      </p>
      <h4>Experience.</h4>
      <p>
        Currently working in <span>DOC PLANNER</span> team.<br />
        Had to presence to work in <span>XTB</span>.
      </p>
      <div class="whoami__content__buttons">
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
  h2 {
    grid-column: 3 / 13;
    grid-row: 2 / 2;
    position: relative;
  }

  h2:after {
    content: "AM I";
    position: absolute;
    font-weight: 400;
    top: 32px;
  }

  img {
    grid-column: 8 / 13;
    grid-row: 3 / 12;
    // margin-top: 25px;
    justify-self: end;

    @include mediaSmartfon {
      display: none;
    }
  }

  &__content {
    grid-column: 3 / 8;
    grid-row: 5 / 12;

    h3 {
      margin-bottom: 15px;
    }

    h4 {
      margin: 25px 0 15px 0;
    }

    p {
      font-size: 18px;
      line-height: 27px;

      span {
        color: $text-basic-color;
        font-weight: bold;
      }
    }

    &__buttons {
      display: flex;
      margin-top: 40px;

      a {
        margin-right: 40px;
      }

      @include mediaSmartfon {
        flex-direction: column;

        a {
          margin: 0 0 20px 0;
        }
      }
    }

    @include mediaSmartfon {
      grid-column: 3 / 13;
    }
  }
}
</style>

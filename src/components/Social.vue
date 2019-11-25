<template>
  <div class="link" v-bind:class="social.icon_class">
    <a
      v-bind:target="/^http/.test(social.link) ? '_blank' : '_self'"
      v-bind:href="social.link"
      rel="noopener noreferrer"
      v-bind:title="social.title"
    >
    </a>
  </div>
</template>

<script>
export default {
  props: {
    social: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../configs/_config";

.link {
  width: 25px;
  height: 25px;

  a {
    cursor: pointer;
    position: relative;

    @include mediaSmartfon {
    }
  }

  &-mail {
    a::before {
      content: url("../assets/mail.svg");
    }
  }

  &-linkedin {
    a::before {
      content: url("../assets/linkedin.svg");
    }
  }

  &-twitter {
    a::before {
      content: url("../assets/twitter.svg");
    }
  }

  &-github {
    a::before {
      content: url("../assets/github.svg");
    }
  }
}
</style>

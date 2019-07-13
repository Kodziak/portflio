<template>
  <div class="link" v-bind:class="media.icon_class">
    <a
      v-bind:target="/^http/.test(media.link) ? '_blank' : '_self'"
      v-bind:href="media.link"
      rel="noopener noreferrer"
      v-bind:title="media.title"
    >
    </a>
  </div>
</template>

<script>
export default {
  props: {
    media: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../config";

.link {
  a {
    cursor: pointer;
    position: relative;

    @include mediaSmartfon {
    }
  }

  &-mail {
    a::before {
      content: url("../../assets/mail.svg");
    }
  }

  &-linkedin {
    a::before {
      content: url("../../assets/linkedin.svg");
    }
  }

  &-twitter {
    a::before {
      content: url("../../assets/twitter.svg");
    }
  }

  &-github {
    a::before {
      content: url("../../assets/github.svg");
    }
  }
}
</style>

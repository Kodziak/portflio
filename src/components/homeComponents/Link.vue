<template>
  <div class="link">
    <a
      v-bind:target="/^http/.test(contact.link) ? '_blank' : '_self'"
      v-bind:href="contact.link"
      rel="noopener noreferrer"
    >{{ contact.content }}</a>
  </div>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../config";

.link {
  margin: 5px 0;

  a {
    cursor: pointer;
    position: relative;
    left: 23px;

    @include mediaSmartfon {
      font-size: 15px;
    }
  }

  a::before {
    position: absolute;
    content: url("../../assets/Lines_mini.svg");
    top: -2px;
    left: -23px;
  }

  a:after {
    @include shadow;
  }
}
</style>

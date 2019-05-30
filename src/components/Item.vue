<template>
  <div class="home__link">
    <img src="../assets/Lines_mini.svg">
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
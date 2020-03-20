<template>
  <div class="socials view--footer">
    <Social
      v-for="(social, index) in socials"
      :key="index"
      :social="social"
      :class="social.background"
    />
  </div>
</template>

<script>
import Social from './Social.vue';

export default {
  name: 'SocialBar',
  components: {
    Social,
  },
  props: {
    socials: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../configs/_config";

.socials {
  display: flex;
  justify-content: center;

  @include mediaSmartfon {
    justify-content: center;
    margin: 0;
  }
}
</style>

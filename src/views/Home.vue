<template>
  <div class="home">
    <h1 class="home__header">oh, <br />hello there.</h1>
    <Button>{{ btn.name }}</Button>
  </div>
</template>

<script>
import Button from "../components/Button";

export default {
  name: "Home",
  components: {
    Button
  },
  data() {
    return {
      btn: {
        name: "GET TO KNOW ME",
        class: "primary"
      }
    };
  }
};
</script>

<style lang="scss">
@import "../configs/_config";

.home {
  height: calc(100vh - 59px);
  display: flex;
  flex-direction: column;
  justify-content: center;

  @include mediaSmartfon {
    height: 80vh;
  }
}

h1 {
  font-size: 128px;
  font-weight: bold;
  color: $text-basic-color;
  margin: 0 0 40px 0;

  @include mediaSmartfon {
  }
}

.home {
  grid-column-start: 7;
  grid-column-end: 13;
  justify-self: end;

  @include mediaSmartfon {
    grid-column-start: 1;
  }
}
</style>

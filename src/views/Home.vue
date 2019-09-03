<template>
  <div class="home">
    <div class="home--grid">
      <div class="home__header">
        <h1>Hi, I'm Przemek.</h1>
        <h2>I'm a Test Developer and Scrum Master.</h2>
        <!-- <div class="home__header--media"><Link v-for="(media, index) in medias" :key="index" :media="media" /></div> -->
      </div>
      <div class="home__content">
        <!-- <Description v-for="(content, index) in desc" :key="index" :content="content" /> -->
        <!-- <Button :btn="btn">{{ btn.name }}</Button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {};
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
  font-size: 48px;
  font-weight: 600;
  color: $text-basic-color;
  position: relative;

  @include mediaSmartfon {
    font-size: 32px;
  }
}

h2 {
  color: $text-basic-color;
  font-size: 32px;
  font-weight: 400;
  margin: 5px 0 0 0;

  @include mediaSmartfon {
    font-size: 24px;
    margin: 5px 10% 0;
  }
}

h3 {
  color: $text-basic-color;
  font-size: 24px;
  font-weight: 400;

  @include mediaSmartfon {
    font-size: 16px;
  }
}

.home--grid {
  display: grid;
  grid-template-columns: repeat(12, 8%);
  grid-column-gap: 8px;

  @include mediaSmartfon {
    grid-template-columns: 10% 80% 10%;
    grid-column-gap: 0px;
  }

  .home__header {
    grid-column-start: 3;
    grid-column-end: 7;

    @include mediaSmartfon {
      grid-column-start: 1;
    }
  }

  .home__content {
    grid-column-start: 8;
    grid-column-end: 11;

    @include mediaSmartfon {
      grid-column-start: 1;
      margin-top: 30px;
      justify-self: center;
    }

    .btn {
      margin-top: 10px;

      @include mediaSmartfon {
        margin-top: 30px;
      }
    }
  }
}

.home__header {
  align-self: center;
  position: relative;

  @include mediaSmartfon {
    text-align: center;
  }

  &--media {
    display: flex;
    flex-direction: row;
    margin-top: 15px;

    @include mediaSmartfon {
      justify-content: center;
      margin-top: 10px;
    }

    .link {
      margin-right: 25px;

      @include mediaSmartfon {
        margin: 0 12px;
      }

      &::hover {
        color: grey;
      }
    }
  }
}
</style>

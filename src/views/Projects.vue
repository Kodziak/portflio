<template>
  <div class="project">
    <div class="view__header view">
      <h2>PROJECTS</h2>
    </div>
    <div class="project__cards">
      <ProjectCard v-for="(project, index) in projects" :key="index" :project="project" />
    </div>
  </div>
</template>

<script>
import ProjectCard from '../components/Project_card.vue';

export default {
  name: 'Projects',
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [
        {
          title: 'Portfolio',
          description: 'Personal website to introduce myself. My look over the design and developing.',
          img: './portfolio.png',
          tags: ['javascript', 'vue', 'scss', 'adobe Xd'],
          btns: [
            {
              name: 'VIEW CODE',
              type: 'btn--secondary',
              link: 'https://www.github.com/kodziak/portfolio',
            },
            {
              name: 'VIEW DEMO',
              type: 'btn--primary',
              link: 'https://www.ppaczoski.pl',
            },
          ],
        },
        {
          title: 'HomePage',
          description:
            'An browser extension which replace default homepage. Build to cover my needs when starting browsering an internet.',
          img: './work_in_progress.png',
          tags: ['javascript', 'adobe Xd'],
          btns: [
            {
              name: 'VIEW CODE',
              type: 'btn--secondary btn--inactive',
              link: '',
            },
            {
              name: 'VIEW DEMO',
              type: 'btn--primary btn--inactive',
              link: '',
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../configs/_config";

.project {
  .view {
    height: unset !important;
  }

  @include mediaSmartfon {
    margin-bottom: 100px;
  }

  h2 {
    position: relative;
    display: inline-block;

    &:after {
      @include shadow;
    }
  }

  &__cards {
    display: flex;
    flex-direction: column;

    .project-card {
      margin: 100px 0;

      @include mediaSmartfon {
        margin: 30px 0;

        &__tags {
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
      }
    }
  }
}
</style>

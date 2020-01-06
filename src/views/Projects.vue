<template>
  <div class="project">
    <div class="view__header">
      <div class="header--bg">
        <h2 class="glitch" data-text="PROJECTS">PROJECTS</h2>
      </div>
    </div>
    <div class="project__cards view">
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
          img: './portfolio.jpg',
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
        /*         {
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
        }, */
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../configs/_config";
@import "../configs/_glitch";

.project {
  &__cards {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>

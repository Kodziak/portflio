<template>
  <div class="project view">
    <div class="view__header">
      <div class="header--bg">
        <h2 class="glitch" data-text="PROJECTS">PROJECTS</h2>
      </div>
    </div>
    <div class="project__cards view__content">
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
          title: 'Daily-news',
          description:
            'Information website where user/client can follow the newest stuff from QA world.',
          img: './daily-news.png',
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
@import "../configs/_glitch";

.project {
  &__cards {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .project-card {
      margin: 50px 0;
    }
  }
}
</style>

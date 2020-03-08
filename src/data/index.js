export const menuButtons = [
  {
    id: 1, name: 'HOME', target: '/', component: 'Home',
  },
  {
    id: 2, name: 'WHO AM I', target: '/who-am-i', component: 'WhoAmI',
  },
  {
    id: 3, name: 'PROJECTS', target: '/projects', component: 'Projects',
  },
];

export const socials = [
  {
    title: 'Mail',
    link: 'mailto:kodziak1416@gmail.com',
    icon: 'mail',
    background: 'icon-mail',
  },
  {
    title: 'Linkedin',
    link: 'https://linkedin.com/in/ppaczoski/',
    icon: 'linkedin',
    background: 'icon-linkedin',
  },
  {
    title: 'Twitter',
    link: 'https://twitter.com/_kodziak',
    icon: 'twitter',
    background: 'icon-twitter',
  },
  {
    title: 'Github',
    link: 'https://github.com/Kodziak/',
    icon: 'github',
    background: 'icon-github',
  },
];

export const whoamiButtons = [
  {
    name: 'VIEW RESUME',
    class: 'btn--secondary',
    link: './CV_Przemyslaw_Paczoski.pdf',
  },
  {
    name: 'CHECK MY WORK',
    router: true,
    class: 'btn btn--primary',
    target: '/projects',
  },
];

export const projects = [
  {
    title: 'Portfolio',
    description: 'Personal website developed to introduce me.',
    img: './portfolio_shape@2x.png',
    tags: ['javascript', 'vue', 'vue-router', 'scss', 'adobe Xd'],
    btns: [
      {
        name: 'CODE',
        type: 'btn--secondary',
        link: 'https://www.github.com/kodziak/portfolio',
      },
      {
        name: 'LIVE',
        type: 'btn--primary',
        link: 'https://www.ppaczoski.pl',
      },
    ],
  },
  {
    title: 'Daily-news',
    description:
      'News website to follow the newest stuff from QA world.',
    img: './daily-news_shape@2x.png',
    tags: ['javascript', 'nodeJS', 'axios', 'cheerio', 'adobe Xd'],
    btns: [
      {
        name: 'CODE',
        type: 'btn--secondary',
        link: 'https://github.com/Kodziak/daily-news',
      },
      {
        name: 'LIVE',
        type: 'btn--primary btn--inactive',
        link: '',
      },
    ],
  },
];

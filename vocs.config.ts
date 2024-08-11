import { defineConfig } from 'vocs'

export default defineConfig({
  ogImageUrl: 'https://avatars.githubusercontent.com/u/26247827?s=400&u=b7fdbd5851143112c64655a7c2a2cb54c4af2831&v=4',
  baseUrl: "https://icanvardar.com",
  title: 'Can Vardar',
  titleTemplate: 'Can Vardar - %s',
  topNav: [
    { text: 'About', link: '/' },
    { text: 'Blog', link: '/blog' },
  ],
  socials: [
    {
      icon: 'github',
      link: 'https://github.com/icanvardar',
    },
    {
      icon: 'x',
      link: 'https://x.com/icanvardar',
    },
  ],
})

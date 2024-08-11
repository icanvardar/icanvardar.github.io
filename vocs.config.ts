import { defineConfig } from 'vocs'

export default defineConfig({
  ogImageUrl: 'https://vocs.dev/api/og?logo=%logo&title=%title&description=%description',
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
  theme: {
    accentColor: { dark: 'lightgreen', light: 'green' },
  },
})

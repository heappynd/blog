import { defineConfig } from 'vitepress'
import nav from './nav'
import sidebar from './sidebar'

export default defineConfig({
  base: '/blog/',
  lang: 'zh-CN',
  title: 'User Config',
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: false,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: '...' },
    ],
    nav,

    sidebar,

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    },
  },
})

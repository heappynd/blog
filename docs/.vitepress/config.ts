import { defineConfig } from 'vitepress'
import conv from './conv'

const { sidebar, nav } = conv()

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
    ],
    nav,

    sidebar
  },
})

import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "站点的标题",
  description: "站点的描述",
  lang: "zh-CN",
  themeConfig: {
    logo: "/image2.jpg",
    siteTitle: "站点的标题2",
    nav: [
      { text: "首页", link: "/" },
      { text: "关于", link: "/about" },
      {
        text: "指南",
        items: [
          { text: "指南1", link: "/guide/" },
          {
            text: "指南2",
            // link: "/guide/about",
            items: [
              { text: "指南2-1", link: "/guide/about", target: '_blank' },
            ],
          },
        ],
      },
    ],
    sidebar: [
      {
        text: "指南",
        items: [
          { text: "指南1", link: "/guide/" },
          { text: "指南2", link: "/guide/about" },
        ],
      },
      { text: '安装', link: '/install' },
    ],
    aside: true,
    outline: {
      level: [2, 3],
      label: "目录",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/your-github" },
      { icon: "twitter", link: "https://twitter.com/your-twitter" },
      { icon: "youtube", link: "https://youtube.com/your-youtube" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present Your Name",
    },
    editLink: {
      pattern: "https://github.com/your-github/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页",
    },
    lastUpdated: {
      text: "最后更新时间",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "full",
      },
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    externalLinkIcon: true,
    returnToTopLabel: "返回顶部",
    sidebarMenuLabel: "侧边栏菜单",
    darkModeSwitchLabel: "切换夜间模式",
    search: {
      provider: 'local'
    }
  },
  // 源目录是 Markdown 源文件所在的位置。
  // 默认情况下，它与项目根目录相同。但是，可以通过 srcDir 配置选项对其进行配置。
  srcDir: "src",
  // cleanUrls: true,
  // 默认情况下，我们假设站点将部署在域名 (/) 的根路径上。
  // 如果站点在子路径中提供服务，例如 https://mywebsite.com/blog/，
  // 则需要在 VitePress 配置中将 base 选项设置为 '/blog/'。
  // base: "/blog/",
  // metaChunk: true
  appearance: true,
  lastUpdated: true,
  async buildEnd(siteConfig) {
    console.log("构建完成");
  },
});

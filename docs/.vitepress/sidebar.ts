import { DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.Config['sidebar'] = {
  '/getting-started': [
    {
      text: 'Guide',
      collapsible: true,
      items: [
        { text: 'Introduction', link: '/introduction' },
        { text: 'Getting Started', link: '/getting-started' },
      ],
    },
  ],
}

export default sidebar

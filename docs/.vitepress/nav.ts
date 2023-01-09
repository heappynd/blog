import { DefaultTheme } from 'vitepress'

const nav: DefaultTheme.Config['nav'] = [
  { text: 'Home', link: '/' },
  { text: '集锦', link: '/getting-started' },
  {
    text: 'Dropdown Menu',
    items: [
      { text: 'Item A', link: '/item-1' },
      { text: 'Item B', link: '/item-2' },
      { text: 'Item C', link: '/item-3' },
    ],
  },
  { text: 'Changelog', link: 'https://github.com' },
]

export default nav

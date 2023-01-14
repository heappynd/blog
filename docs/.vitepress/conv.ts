import fg from 'fast-glob'
import path from 'path'
import matter from 'gray-matter'
import fs from 'fs'
import type { DefaultTheme } from 'vitepress'

export default function conv() {
  const nav: NonNullable<DefaultTheme.Config['nav']> = []

  const sidebar: NonNullable<DefaultTheme.Config['sidebar']> = {}

  console.log('process.cwd()', process.cwd())
  const pages = fg.sync(['**.md'], {
    cwd: path.resolve(process.cwd(), 'docs'),
    ignore: ['**/node_modules'],
  })

  console.log(pages)

  const buckets = new Map()
  pages.forEach((page) => {
    const s = page.split('/')
    if (s.length === 1) {
      nav.push({ text: page, link: '/' + page })
    } else if (s.length === 2) {
      const key = s[0]
      if (!buckets.has(key)) {
        buckets.set(key, [])
      }
      buckets.get(key).push({
        path: path.resolve(process.cwd(), 'docs', page),
        origin: page,
        key: s[0],
        value: s[1],
      })
    } else {
      // cannot parse
    }
  })

  buckets.forEach((value, key) => {
    nav.push({
      text: key,
      link: '/' + value[0].origin,
    })

    const groups = {}

    value.forEach((path) => {
      const src = fs.readFileSync(path.path).toString()
      const result = matter(src)
      const title = result.data.group ? result.data.group.title : 'Other'
      if (!groups[title]) {
        groups[title] = []
      }
      groups[title].push(path.origin)
    })

    if (!sidebar[key]) {
      sidebar[key] = []
    }
    sidebar[key] = Object.keys(groups).map((key) => ({
      text: key,
      collapsible: true,
      items: groups[key].map((item) => ({
        text: item,
        link: '/' + item,
      })),
    }))
  })

  return {
    sidebar,
    nav,
  }
}

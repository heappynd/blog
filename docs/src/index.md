---
layout: home
hero:
  name: hero.name
  text: hero.text
  tagline: hero.tagline
  image:
    src: /image2.jpg
    alt: hero.image.alt
  actions:
    - theme: brand
      text: actions.0.text
      link: /guide/
    - theme: alt
      text: actions.1.text
      link: /guide/
features:
  - icon: 🛠️
    title: features.0.title
    details: features.0.details
  - icon: 🛠️
    title: features.1.title
    details: features.1.details
  - icon: 🛠️
    title: features.2.title
    details: features.2.details
---

## Getting Started <Badge type="danger" text="caution" />

You can get started using VitePress right away using `npx`!

```sh
npm init
npx vitepress init
```

index.md

[index.md](/) |
[about.md](/about) |
[guide/index.md](/guide/) |
[guide/about.md](/guide/about)

# Our Team

Say hello to our awesome team.

<VPTeamMembers size="small" :members="members" />

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
    ]
  },
]
</script>

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>

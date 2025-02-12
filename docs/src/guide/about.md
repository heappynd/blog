---
title: Docs with VitePress
layout: doc
navbar: true
sidebar: true
---

guide/about.md

[index.md](/) |
[about.md](/about) |
[guide/index.md](/guide/) |
[guide/about.md](/guide/about)

[baidu](https://www.baidu.com)

<script setup>
import { withBase, useData } from 'vitepress'
import { ref } from 'vue'
const data = useData()

console.log(data.frontmatter.value)


const count = ref(0)
const plus = ()=> count.value++
</script>

{{ count }}

<button :class="$style.button" @click="plus">plus</button>

{{ $frontmatter.title }}

{{ withBase('a.png') }}

```js-vue
{{ data.page }}
```


<style module>
.button {
  color: red;
  font-weight: bold;
}
</style>
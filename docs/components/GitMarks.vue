<template>
  <div class="grid grid-cols-2 gap-4">
    <a
      v-for="mark in marks"
      :key="mark"
      :href="'https://github.com/' + mark"
      target="_blank"
    >
      <!-- <img
        :src="`https://socialify.git.ci/${mark}/image?description=1&owner=1&language=1&name=1&stargazers=1&theme=Auto`"
        :alt="mark"
      /> -->
      {{ getName(mark) }}
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps<{ marks: string[] }>();

function getName(orignName: string) {
  const [owner, name] = orignName.split("/");
  return owner === name ? name : orignName;
}
</script>

<style>
.grid {
  display: grid;
}

.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.gap-4 {
  gap: 1rem;
}
</style>
